import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OutdoorCenter } from '../../domain/model/outdoor-center.entity';
import { Reservation } from '../../domain/model/reservation.entity';
import { ReservationDraft } from '../../domain/model/reservation-draft';
import { OutdoorCenterAssembler } from '../outdoor-center/outdoor-center.assembler';
import { ReservationAssembler } from './reservation.assembler';
import { OutdoorCenterResource } from '../outdoor-center/outdoor-center.resource';
import { ReservationResource } from './reservation.resource';

@Injectable({ providedIn: 'root' })
export class ReservationApiService {
  private readonly http = inject(HttpClient);
  private readonly collectionAssembler = inject(OutdoorCenterAssembler);
  private readonly historicalObjectAssembler = inject(ReservationAssembler);

  private readonly collectionsUrl = `${environment.apiBaseUrl}${environment.outdoorCentersPath}`;
  private readonly historicalObjectsUrl = `${environment.apiBaseUrl}${environment.reservationsPath}`;

  getCollections(): Observable<OutdoorCenter[]> {
    return this.http
      .get<OutdoorCenterResource[]>(this.collectionsUrl)
      .pipe(map((resources) => resources.map((r) => this.collectionAssembler.toEntityFromResource(r))));
  }

  getHistoricalObjects(): Observable<Reservation[]> {
    return this.http
      .get<ReservationResource[]>(this.historicalObjectsUrl)
      .pipe(map((resources) => resources.map((r) => this.historicalObjectAssembler.toEntityFromResource(r))));
  }

  createHistoricalObject(draft: ReservationDraft): Observable<Reservation> {
    const request = this.historicalObjectAssembler.toRequestFromDraft(draft);
    return this.http
      .post<ReservationResource>(this.historicalObjectsUrl, request)
      .pipe(map((resource) => this.historicalObjectAssembler.toEntityFromResource(resource)));
  }
}
