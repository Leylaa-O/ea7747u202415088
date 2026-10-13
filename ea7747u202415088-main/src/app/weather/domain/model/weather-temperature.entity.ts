import { BaseEntity } from '../../../shared/domain/model/base.entity';

export class WeatherTemperature extends BaseEntity {
 /* #latitude:              number;
  #longitude:             number;
  #generationtime_ms:     number;
  #utc_offset_seconds:    number;
  #timezone:              string;
  #timezone_abbreviation: string;
  #elevation:             number;
  #current_units:         string;
  #current:               string;*/

  constructor(
    id: number,
    readonly latitude: number,
    readonly longitude: number,
    readonly generationtime_ms: number,
    readonly utc_offset_seconds: number,
    readonly timezone: string,
    readonly timezone_abbreviation: string,
    readonly elevation: number,
    readonly current_units: string,
    readonly current: string
  ) {
    super(id);
}
}

