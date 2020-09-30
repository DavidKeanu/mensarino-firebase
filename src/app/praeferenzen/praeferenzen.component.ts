import {Component, OnInit} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {FavoriteService} from '../service/favorite.service';
import {DataStorageService} from '../service/data-storage.service';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-praeferenzen',
  templateUrl: './praeferenzen.component.html',
  styleUrls: ['./praeferenzen.component.css']
})
export class PraeferenzenComponent implements OnInit {
  public favorite: any;
  public removable: boolean = true;
  public selectable: boolean = true;
  public isChecked: boolean;
  private firstkeyInt: number;


  constructor(private swPush: SwPush,
              private favoriteService: FavoriteService,
              private dataStorageService: DataStorageService,
              private datePipe: DatePipe,
              private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    //If user checked notification before
    if (localStorage.getItem('checked')) {
      let json = JSON.parse(localStorage.getItem('checked'));
      this.isChecked = json.run;
    } else {
      this.isChecked = false;
    }

    this.favorite = this.favoriteService.getFavorites();
    //Get favorite Mensa from service
    this.favoriteService.favoriteMensaChanged.subscribe((favoriteMensa: string) => {
      this.favorite = JSON.parse(favoriteMensa);
    });

  }

  //Remove favorite Mensa with key
  remove(mensa): void {
    this.favoriteService.deleteFavorite(mensa.key);
  }

  onChange($event: MatSlideToggleChange) {
    this.isChecked = $event.checked;

  }
}
