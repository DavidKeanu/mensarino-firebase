import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Gericht} from '../gerichte/gericht.model';

@Injectable()
export class GerichtService {

  private gerichte: Gericht[] = [];

  public gerichteChanged = new Subject<Gericht[]>();

  setGerichte(gericht: Gericht[]) {
    this.gerichte = gericht;
    this.gerichteChanged.next(this.gerichte.slice())
  }


}


