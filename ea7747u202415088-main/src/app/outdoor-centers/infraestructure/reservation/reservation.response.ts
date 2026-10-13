import {Reservation} from '../../domain/model/reservation.entity';

export interface ReservationResponse {
  outDoorCenter: Reservation[];
}
