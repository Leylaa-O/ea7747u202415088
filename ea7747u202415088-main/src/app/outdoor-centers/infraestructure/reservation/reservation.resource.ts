import {ActivityType} from '../../domain/model/activity-type.enum';
import {OutdoorCenter} from '../../domain/model/outdoor-center.entity';
import {WeatherTemperature} from '../../../weather/domain/model/weather-temperature.entity';

export interface ReservationResource {
  id: number,
  outdoorCenterId: number,
  outdoorCenter: OutdoorCenter | null,
  activityType: ActivityType | null,
  participantName: string[],
  participants: number,
  weatherTemperature: WeatherTemperature | null,
  reservedAt: Date | null,
}

