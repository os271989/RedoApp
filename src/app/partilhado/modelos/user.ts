import { Carrinho } from './carrinho';

export class User {
  id!: number;
  username!: string;
  password!: string;
  fName!: string;
  lName!: string;
  adress!: string;
  cp!: number;
  local!: string;
  district!: string;
  email!: string;
  encomendas?: Carrinho[];
}
