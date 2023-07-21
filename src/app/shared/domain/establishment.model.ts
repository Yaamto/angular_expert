export interface Establishment {
  id: number;
  nom: string;
  address: string;
  city: string;
  cp: number;
  openHours: Date;
  closeHours: Date;
  createdAt: Date;
  updatedAt: Date;
}
