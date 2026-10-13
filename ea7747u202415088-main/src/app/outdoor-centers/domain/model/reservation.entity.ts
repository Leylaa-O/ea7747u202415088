import {ActivityType} from './activity-type.enum';

export class Reservation {
  #id: number;
  #outdoorCenterId: number;
  #activityType: ActivityType | null;
  #participantName: string;
  #participants: number;
  #weatherTemperature: null;
  #reservedAt: null;

  constructor(reservation: { id: number, outdoorCenterId: number }) {
    this.#id=reservation.id;
    this.#outdoorCenterId=reservation.outdoorCenterId;
  }
}

