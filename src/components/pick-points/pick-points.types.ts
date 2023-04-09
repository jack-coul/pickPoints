export interface PickPointType {
  address: string;
  budgets: string[];
  latitude: number;
  longitude: number;
}

export interface ResponseType {
  pickPoints: PickPointType[];
}
