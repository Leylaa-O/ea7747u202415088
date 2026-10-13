export interface WeatherTemperatureResource {
  id: number,
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  current_units: string,
  current: string
}
