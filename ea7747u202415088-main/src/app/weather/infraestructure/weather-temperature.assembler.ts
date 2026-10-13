import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../shared/infraestructure/base-assembler';
import { WeatherTemperature } from '../domain/model/weather-temperature.entity';
import { WeatherTemperatureResource } from './weather-temperature.resource';
import { WeatherTemperatureResponse } from './weather-temperature.response';

@Injectable({ providedIn: 'root' })
export class CoinAssembler implements BaseAssembler<WeatherTemperature, WeatherTemperatureResource> {

  toEntityFromResource(resource: WeatherTemperatureResource): WeatherTemperature {
    return new WeatherTemperature(
      resource.id, resource.latitude, resource.longitude, resource.generationtime_ms,
      resource.utc_offset_seconds, resource.timezone, resource.timezone_abbreviation, resource.elevation,
      resource.current_units, resource.current
    );
  }

  toResourceFromEntity(entity: WeatherTemperature): WeatherTemperatureResource {
    return {
      id: entity.id, latitude: entity.latitude, longitude: entity.longitude,
      generationtime_ms: entity.generationtime_ms, utc_offset_seconds: entity.utc_offset_seconds,
      timezone: entity.timezone, timezone_abbreviation: entity.timezone_abbreviation,
      elevation: entity.elevation, current_units: entity.current_units, current: entity.current
    };
  }

  toEntitiesFromResponse(response: WeatherTemperatureResponse): WeatherTemperature[] {
    return response.coins.map((resource) => this.toEntityFromResource(resource));
  }
}
