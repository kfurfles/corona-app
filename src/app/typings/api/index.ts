export interface IRequestByCountry{
  data: ICountry;
}

export interface ICountry {
  cases: number;
  confirmed: number;
  country: string;
  deaths: number;
  recovered: number;
  updated_at: string;
}

export interface IRequestBrazilStates {
  data: IState[];
}

export interface IState {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  broadcast: number;
  comments: string;
  datetime: string;
}
