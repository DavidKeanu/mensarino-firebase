import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensaService {

  constructor(private http: HttpClient) {
  }

  //Get List of all mensen
  getMensen() {
    return this.http.get("https://openmensa.org/api/v2/canteens/");
  }
  //Get single mensa
  getSingleMensa(id: number){
    return this.http.get("https://openmensa.org/api/v2/canteens/"+id)
  }


}