import {Component, HostListener, Inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

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

  message = 'JA';
  action = 'NEIN';


  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {data: "Sample data",
      duration: 4000,
    });
  }
  // addToHomeScreen() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  // }
  ngOnInit() {
    console.log("test")
    setTimeout(() => {
      // if (this.showSnackbar) {
      this.openSnackBar();
      // }
    }, 2000);
  }

  //Set current title for page
  setTitle(title: string) {
    this.title = title;
  }


}
  @Component({
    selector: 'snack-bar-componet-example-snack',
    templateUrl: 'snack-bar-componet-example-snack.html',
  })
  export class PizzaPartyComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<PizzaPartyComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

    deferredPrompt: any;
    showSnackbar = false;
    @HostListener('window:beforeinstallprompt', ['$event'])
    onbeforeinstallprompt(e) {
      console.log(e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      this.showSnackbar = true;
    }
    addPWA() {
      console.log("install Test")
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


