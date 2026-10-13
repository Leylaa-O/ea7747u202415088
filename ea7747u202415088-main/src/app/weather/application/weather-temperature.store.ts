import { Injectable, computed, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { WeatherTemperature } from '../domain/model/weather-temperature.entity';
import { WeatherTemperatureApiService } from '../infraestructure/weather-temperature-api.service';

@Injectable({ providedIn: 'root' })
export class WeatherTemperatureStore {
  private readonly api = inject(WeatherTemperatureApiService);

  private readonly WeatherTemperatureState = signal<WeatherTemperature[]>([]);
  private readonly loadingState = signal(false);
  private readonly errorState = signal<string | null>(null);
  private loaded = false;

  readonly loading = this.loadingState.asReadonly();

  readonly error = this.errorState.asReadonly();

  readonly weatherTemperature = computed(() =>
    this.WeatherTemperatureState().filter((weather) => weather.id)
  );

  private fetchCatalog(): void {
    this.loadingState.set(true);
    this.errorState.set(null);
    forkJoin([this.api.getWeatherTemperature()]).subscribe({
      next: ([weathers]) => {
        this.WeatherTemperatureState.set(weathers);
        this.loaded = true;
        this.loadingState.set(false);
      },
      error: () => {
        this.errorState.set('errors.weather-temperature-Failed');
        this.loadingState.set(false);
      }
    });
  }
}
