import { Observable, Subject, takeUntil } from 'rxjs';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/Weather';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css'],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  inicialNameCity = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;
  private readonly destroy$: Subject<void> = new Subject();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherDatas(this.inicialNameCity);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        },
        error: (error) => console.log(error),
      });
      console.log(this.inicialNameCity)
  }

  onSubmit(): void {
    this.getWeatherDatas(this.inicialNameCity);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
