import { Injectable } from '@angular/core';
import { Carrinho } from '../partilhado/modelos/carrinho';
import { CarrinhoProduto } from '../partilhado/modelos/carrinhoProduto';
import { Foods } from '../partilhado/modelos/food';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  //Criação de uma instancia Carrinho
  private carrinho: Carrinho = new Carrinho();
  private carrinhoSubject: BehaviorSubject<Carrinho> = new BehaviorSubject(
    this.carrinho
  );

  //Função para adicionar pratos ao carrinho recebendo um prato por parametro
  adicionarPrato(food: Foods): void {
    let carrinhoProduto = this.carrinho.items.find(
      (item) => item.food.id === food.id
    );
    //Se encontrar um produto correspondente incrementa a quantidade desse produto no carrinho
    if (carrinhoProduto && carrinhoProduto.quantity <= 5) {
      this.alterarQuantidadePrato(food.id, carrinhoProduto.quantity + 1);
      return;
    }
    //Adiciona o carrinho de produtos ao carrinho da encomenda
    this.carrinho.items.push(new CarrinhoProduto(food));
  }

  //Função para remover um item do carrinho enviando como parametro o seu ID
  removerPrato(foodId: number): void {
    this.carrinho.items = this.carrinho.items.filter(
      (item) => item.food.id != foodId
    );
  }

  //Função para alterar quantidade de um produto enviando por parametro o seu ID
  alterarQuantidadePrato(foodId: number, quantidade: number) {
    //Procuramos o produto no nosso carrinho de produtos
    let carrinhoProduto = this.carrinho.items.find(
      (item) => item.food.id === foodId
    );
    console.log(carrinhoProduto);
    //Se não existir sai da função
    if (!carrinhoProduto) return;
    //Se existir atribui a quantidade enviada por parametro e calcula preco
    carrinhoProduto.quantity = quantidade;
  }

  //Função para devolver o carrinho da respetiva encomenda
  devolveCarrinho(): Carrinho {
    return this.carrinho;
  }

  getCarrinhoObservable(): Observable<Carrinho> {
    return this.carrinhoSubject.asObservable();
  }

  constructor() {}
}
