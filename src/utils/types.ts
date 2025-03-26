export interface WeatherData {
  current: {
    condition: {
      icon: string;
      temp_c: number;
      text: string;
    };
    temp_c: string;
    localtime: string;
  };
  location: {
    name: string;
    country: string;
    lon: number;
    lat: number;
  };
}

export type City = {
  city: string;
}
