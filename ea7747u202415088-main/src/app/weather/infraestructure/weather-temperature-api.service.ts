import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherTemperature } from '../domain/model/weather-temperature.entity';
import { WeatherTemperatureAssembler } from './weather-temperature.assembler';
import { WeatherTemperatureResponse } from './weather-temperature.response';

@Injectable({ providedIn: 'root' })
export class WeatherTemperatureApiService {
  private readonly http = inject(HttpClient);
  private readonly weatherTemperatureAssembler = inject(WeatherTemperatureAssembler);

  getWeatherTemperature(): Observable<WeatherTemperature[]> {
    return this.http
      .get<WeatherTemperatureResponse>(environment.weatherTemperatureUrl)
      .pipe(map((response) => this.weatherTemperatureAssembler.toEntitiesFromResponse(response)));
  }

}
