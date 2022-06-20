import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from '../../partilhado/modelos/food';
import { CarrinhoService } from '../../services/carrinho.service';
import { PratosService } from '../../services/food/pratos.service';

@Component({
  selector: 'app-pagina-pratos',
  templateUrl: './pagina-pratos.component.html',
  styleUrls: ['./pagina-pratos.component.css'],
})
export class PaginaPratosComponent implements OnInit {
  food!: Foods;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pratosService: PratosService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = pratosService.getFoodById(params['id']);
    });
  }

  //função para adicionar a seleção de produtos ao carrinho
  adicionarAoCarrinho() {
    this.carrinhoService.adicionarPrato(this.food);
    this.router.navigateByUrl('/pagina-carrinho');
  }

  ngOnInit(): void {}
}
