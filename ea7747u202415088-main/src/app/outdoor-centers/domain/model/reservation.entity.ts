import {ActivityType} from './activity-type.enum';
import {BaseEntity} from '../../../shared/domain/model/base.entity';
import {WeatherTemperature} from '../../../weather/domain/model/weather-temperature.entity';
import {OutdoorCenter} from './outdoor-center.entity';

export class Reservation extends BaseEntity{
  /*#id: number;
  #outdoorCenterId: number;
  #activityType: ActivityType | null;
  #participantName: string;
  #participants: number;
  #weatherTemperature: null;
  #reservedAt: null;*/

  constructor(
    id: number,
    readonly outdoorCenterId: number,
    readonly outdoorCenter: OutdoorCenter | null,
    readonly activityType: ActivityType | null,
    readonly participantName: string[],
    readonly participants: number,
    readonly weatherTemperature: WeatherTemperature | null,
    readonly reservedAt: Date
  ) {
    super(id);
  }
}

