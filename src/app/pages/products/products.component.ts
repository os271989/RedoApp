import { Component, OnInit } from '@angular/core';
import { PratosService } from '../../services/food/pratos.service';
import { Foods } from '../../partilhado/modelos/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../partilhado/modelos/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  foods: Foods[] = [];
  user!: User;
  constructor(private fs: PratosService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    // Criar rota para produto introduzido no campo de pesquisa
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.foods = this.fs
          .getAll()
          .filter((food) =>
            food.nome.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      //Condição para definir as rotas para produtos com tag enviada por parametro
      else this.foods = this.fs.getAll(); //Atribuindo todos os produtos inicialmente ao array
    });
  }
}
