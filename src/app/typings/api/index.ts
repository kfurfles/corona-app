export interface IRequestByCountry{
  data: {
    cases: number;
    confirmed: number;
    country: string;
    deaths: number;
    recovered: number;
    updated_at: string;
  };
}
