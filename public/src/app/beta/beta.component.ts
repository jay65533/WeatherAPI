import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'
@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  weather: any;
  humidity: any;
  name: any;
  temp_high: any;
  temp_low: any;
  temp_avg: any;
  status: any;
  constructor(private _weatherService: WeatherService) { 
  }
  

  ngOnInit() {
    this.weather = this._weatherService.getWeather('Chicago').then(weather =>{
      console.log(weather)
      this.name = weather['name']
      this.humidity = weather['main']['humidity']
      this.temp_avg = weather['main']['temp']
      this.temp_avg = Math.floor(this.temp_avg * (9/5) - 459.67)
      this.temp_high = weather['main']['temp_max']
      this.temp_high = Math.floor(this.temp_high * (9/5) - 459.67)
      this.temp_low = weather['main']['temp_min']
      this.temp_low = Math.floor(this.temp_low * (9/5) - 459.67)
      this.status = weather['weather'][0]['description']
    })
  }

}
