import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThedataService {
   private _url: string="http://api.coronastatistics.live/countries";
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this._url);
  }
}
