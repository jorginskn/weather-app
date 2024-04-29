import { WeatherDatas } from 'src/app/models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperature0,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: WeatherDatas;
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  constructor() {}

  ngOnInit() {
    console.log(this.weatherDatasInput, 'recebi');
  }
}
