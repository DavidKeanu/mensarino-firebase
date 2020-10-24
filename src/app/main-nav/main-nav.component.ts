import {Component, HostListener} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

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


  constructor(private breakpointObserver: BreakpointObserver,
              private _snackBar: MatSnackBar) {
  }

  deferredPrompt: any;
  showSnackbar = false;
  message = 'JA';
  action = 'NEIN';

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.showSnackbar = true;
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  // addToHomeScreen() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  // }
  ngOnInit() {
    setTimeout(() => {
      // if (this.showSnackbar) {
        this.openSnackBar('d', this.addPWA());
      // }
    }, 2000)
  }
  //Set current title for page
  setTitle(title: string) {
    this.title = title;
  }

  addPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
    }
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }
}


