import { Injectable } from '@angular/core';
import { BaseAssembler } from '../../../shared/infraestructure/base-assembler';
import { Reservation } from '../../domain/model/reservation.entity';
import { ReservationDraft } from '../../domain/model/reservation-draft';
import { CreateReservationRequest } from './create-reservation';
import { ReservationResource } from './reservation.resource';

@Injectable({ providedIn: 'root' })
export class ReservationAssembler implements BaseAssembler<Reservation, ReservationResource> {

  toEntityFromResource(resource: ReservationResource): Reservation {
    return new Reservation(
      resource.id,
      resource.outdoorCenterId,
      resource.outdoorCenter,
      resource.activityType,
      resource.participantName,
      resource.participants,
      resource.weatherTemperature,
      new Date(resource.reservedAt)
    );
  }

  toResourceFromEntity(entity: Reservation): ReservationResource {
    return {
      id: entity.id,
      ...this.toRequestFields(entity, entity.reservedAt)
    };
  }

  toRequestFromDraft(draft: ReservationDraft): CreateReservationRequest {
    return this.toRequestFields(draft, new Date());
  }

  private toRequestFields(
    source: ReservationDraft,
    reservedAt: Date
  ): CreateReservationRequest {
    return {
      outdoorCenterId: source.outdoorCenterId,
      outdoorCenter: source.outdoorCenter,
      activityType: source.activityType,
      participantName: source.participantName,
      weatherTemperature: source.weatherTemperature,
      reservedAt: reservedAt.toISOString()
    };
  }
}
