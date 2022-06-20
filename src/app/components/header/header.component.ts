import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/partilhado/modelos/user';
import { CarrinhoService } from '../../services/carrinho.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //Definir função para indicar numero de items no carrinho
  user!: User;
  quantidadeCarrinho = 0;

  constructor(carrinhoService: CarrinhoService) {
    carrinhoService.getCarrinhoObservable().subscribe((novoCarrinho) => {
      this.quantidadeCarrinho = novoCarrinho.quantidadeTotal;
    });
  }

  ngOnInit(): void {}
}
