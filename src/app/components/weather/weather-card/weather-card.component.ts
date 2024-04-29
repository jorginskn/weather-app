import { WeatherDatas } from 'src/app/models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: WeatherDatas;

  constructor() {}

  ngOnInit() {
    console.log(this.weatherDatasInput, 'recebi')
  }
}
