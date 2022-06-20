import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../../partilhado/modelos/carrinho';
import { CarrinhoProduto } from '../../partilhado/modelos/carrinhoProduto';
import { CarrinhoService } from '../../services/carrinho.service';
import { PratosService } from '../../services/food/pratos.service';

@Component({
  selector: 'app-pagina-carrinho',
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css'],
})
export class PaginaCarrinhoComponent implements OnInit {
  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.defineCarrinho();
  }

  ngOnInit(): void {}

  //Chamada de função para definir o carrinho atual
  defineCarrinho() {
    this.carrinho = this.carrinhoService.devolveCarrinho();
  }

  //Instanciação do carrinho e chamada da função para remover um produto
  removerDoCarrinho(carrinhoProduto: CarrinhoProduto) {
    this.carrinhoService.removerPrato(carrinhoProduto.food.id);
    this.defineCarrinho();
  }

  //Chamada da função para alterar quantidade de produtos
  alterarQuantidade(
    carrinhoProduto: CarrinhoProduto,
    quantidadeString: string
  ) {
    const quantidade = parseInt(quantidadeString);
    this.carrinhoService.alterarQuantidadePrato(
      carrinhoProduto.food.id,
      quantidade
    );
    this.defineCarrinho();
  }
}
