import { ReservationResource } from './reservation.resource';

export interface CreateReservationRequest extends Omit<ReservationResource, 'id'> {}
