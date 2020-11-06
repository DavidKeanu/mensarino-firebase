import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Mensa} from './mensa.model';
import {MensaService} from '../service/mensa.service';

@Component({
  selector: 'app-mensen',
  templateUrl: './mensen.component.html',
  styleUrls: ['./mensen.component.css']
})
export class MensenComponent implements OnInit {
  public mensen: Mensa[] = [];
  //Pass slected Mensa to Gerichte Component
  @Output() mensaSelected: EventEmitter<any> = new EventEmitter<any>();
  private mensa: Mensa;
   term: string;

  constructor(private mensenService: MensaService) {
  }

  ngOnInit() {
    this.fetchMensen();
  }

  //Fetch Mensa from mensaService. Result is Mapped to Model (Mensa)
  fetchMensen() {
    this.mensenService.getMensen().
    subscribe((data: Mensa[]) => {
      if (data){
      this.mensen = data;
      }
    }), error => console.log('Mensaerror',error);
  }
  //Emit when mensa is changed.

  onMensaSelectedChange(mensa) {
    this.mensa = mensa;
    this.mensaSelected.emit(this.mensa);

  }

}
