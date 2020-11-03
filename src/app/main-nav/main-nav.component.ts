import {Component, HostListener, Inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PwaServiceService} from '../service/pwa-service.service';
import {SnackBar} from './snackBar/snackBar';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  //show top left on navigagiton bar
  public title: string = 'Speiseplan';

  //Transform Navigation to mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    //Show Snackbar, when app is not installed
    this.pwaService.setSnackbar(true);
    console.log('before Event wurde geschmissen');
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private _snackBar: MatSnackBar,
              private pwaService: PwaServiceService) {
  }

  message = 'JA';
  action = 'NEIN';
  deferredPrompt: any;
  show: boolean;

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBar, {
      data: this.deferredPrompt,
      duration: 6000,
    });
  }



  ngOnInit() {
    //Subscribe to see if Snackbar Install prompt is shown
    this.pwaService.showSnackbar.subscribe((showSnack) => {
     this.show = showSnack
    });

    setTimeout(() => {
      if (this.show) {
        this.openSnackBar();
      }
    }, 2000);
  }

  //Set current title for page
  setTitle(title: string) {
    this.title = title;
  }
}


