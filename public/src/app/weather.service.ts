import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private _http: HttpClient) { 
   }
  getWeather(city: String) {
    let observable = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=65a2f72fafb3bbf39aa826ebc10b809c'
    return this._http.get(observable).toPromise()
  }
}
