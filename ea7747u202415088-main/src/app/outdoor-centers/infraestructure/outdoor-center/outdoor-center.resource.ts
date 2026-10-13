import {ActivityType} from '../../domain/model/activity-type.enum';

export interface OutdoorCenterResource {
  id: number,
  name: number,
  activityType: ActivityType | null,
  capacity: number,
  latitude: number,
  longitude: number
}
