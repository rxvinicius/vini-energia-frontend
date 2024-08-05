export type SupplierProps = {
  id: string;
  name: string;
  logo: string;
  state: string;
  costPerKwh: number;
  minKwh: number;
  totalClients: number;
  averageRating: number;
  [key: string]: string | number;
};
