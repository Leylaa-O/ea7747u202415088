import {ActivityType} from './activity-type.enum';
import {BaseEntity} from '../../../shared/domain/model/base.entity';

export class OutdoorCenter extends BaseEntity{

  constructor(
    id: number,
    readonly name: number,
    readonly activityType: ActivityType | null,
    readonly capacity: number,
    readonly latitude: number,
    readonly longitude: number
  ) {
    super(id);
  }
}
