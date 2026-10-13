import {ActivityType} from './activity-type.enum';

export class OutdoorCenter {
  constructor(
    id: number,
    readonly name: string,
    readonly activityType: ActivityType,
    readonly capacity: number,
    readonly latitude: number,
    readonly longitude: string
  )
}
