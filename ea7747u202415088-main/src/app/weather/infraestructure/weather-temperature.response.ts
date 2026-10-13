import {WeatherTemperature} from '../domain/model/weather-temperature.entity';

export interface WeatherTemperatureResponse {
  weather: WeatherTemperature[];
}
