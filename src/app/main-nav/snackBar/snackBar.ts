import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {PwaServiceService} from '../../service/pwa-service.service';

@Component({
  selector: 'snack-bar-componet-example-snack',
  templateUrl: 'snackBar.html',
})
export class SnackBar {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackBar>,
    @Inject(MAT_SNACK_BAR_DATA) public deferredPrompt: any,
    private pwaService: PwaServiceService) {
  }

  addPWA() {
    //Ask user again if he wants to install
    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          //If he installed the app, don't show snackbar again
          this.pwaService.setSnackbar(false);
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
  }
}
