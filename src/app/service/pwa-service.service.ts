import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {

  showSnackbar = new Subject<boolean>();

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
        window.location.reload();

    });

  }
  setSnackbar(boolean: boolean){
    this.showSnackbar.next(boolean);
  }
}
