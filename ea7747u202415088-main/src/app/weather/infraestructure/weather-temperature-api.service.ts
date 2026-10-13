import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherTemperature } from '../domain/model/weather-temperature.entity';
import { WeatherTemperatureAssembler } from '../assemblers/coin.assembler';
import { CollectionTypeAssembler } from '../assemblers/collection-type.assembler';
import { CoinsResponse } from '../responses/coins.response';
import { CollectionTypesResponse } from '../responses/collection-types.response';

@Injectable({ providedIn: 'root' })
export class WeatherTemperatureApiService {
  private readonly http = inject(HttpClient);
  private readonly coinAssembler = inject(WeatherTemperatureAssembler);
  private readonly collectionTypeAssembler = inject(CollectionTypeAssembler);

  /** @returns All coins offered by the provider. */
  getCoins(): Observable<WeatherTemperature[]> {
    return this.http
      .get<CoinsResponse>(environment.coinsUrl)
      .pipe(map((response) => this.coinAssembler.toEntitiesFromResponse(response)));
  }

  /** @returns All collection types offered by the provider. */
  getCollectionTypes(): Observable<CollectionType[]> {
    return this.http
      .get<CollectionTypesResponse>(environment.collectionTypesUrl)
      .pipe(map((response) => this.collectionTypeAssembler.toEntitiesFromResponse(response)));
  }
}
