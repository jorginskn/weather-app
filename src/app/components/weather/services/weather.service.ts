import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '04ac688573a9f49c9432af292054f5b7';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string):Observable<any> {
      return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{})
  }
}
