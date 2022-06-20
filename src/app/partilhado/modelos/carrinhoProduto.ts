import { Foods } from './food';

//Classe para selecção de pratos a encomendar
export class CarrinhoProduto {
  //Construtor para o carrinho
  constructor(food: Foods) {
    this.food = food;
  }

  food: Foods;
  quantity: number = 1;

  //Definição de função para calcular o preço segundo a quantidade de produtos
  get price(): number {
    return this.food.preco * this.quantity;
  }
}
