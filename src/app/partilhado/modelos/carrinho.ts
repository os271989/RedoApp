import { CarrinhoProduto } from './carrinhoProduto';

//Classe para carrinho da encomenda
export class Carrinho {
  items: CarrinhoProduto[] = [];

  //Função para sempre que se adicionar um item ao carrinho somar o seu valor ao total da encomenda
  get valorTotal(): string {
    let valorTotal = 0;
    this.items.forEach((item) => {
      valorTotal += item.price;
    });
    return valorTotal.toPrecision(5);
  }

  get quantidadeTotal(): number {
    let qtdTotal = 0;
    this.items.forEach((item) => {
      qtdTotal += item.quantity;
    });
    return qtdTotal;
  }
}
