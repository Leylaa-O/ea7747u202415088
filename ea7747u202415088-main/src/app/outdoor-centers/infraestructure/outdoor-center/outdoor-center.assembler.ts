import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../../shared/infraestructure/base-assembler';
import { OutdoorCenter } from '../../domain/model/outdoor-center.entity';
import { OutdoorCenterResource } from './outdoor-center.resource';
import { OutdoorCenterResponse } from './outdoor-center.response';
import {ActivityType} from '../../domain/model/activity-type.enum';

@Injectable({ providedIn: 'root' })
export class OutdoorCenterAssembler implements BaseAssembler<OutdoorCenter, OutdoorCenterResource> {

  toEntityFromResource(resource: OutdoorCenterResource): OutdoorCenter {
    return new OutdoorCenter(
      resource.id, resource.name, resource.activityType, resource.capacity,
      resource.latitude, resource.longitude
    );
  }

  toResourceFromEntity(entity: OutdoorCenter): OutdoorCenterResource {
    return {
      id: entity.id, name: entity.name, activityType: entity.activityType,
      capacity: entity.capacity, latitude: entity.latitude,
      longitude: entity.longitude
    };
  }

  toEntitiesFromResponse(response: OutdoorCenterResponse): OutdoorCenter[] {
    return response.outDoorCenter.map((resource) => this.toEntityFromResource(resource));
  }
}
