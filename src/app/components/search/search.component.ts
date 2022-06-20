import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchItem: string = ''; //Definindo o item de procura
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //Definindo a rota segundo o produto que é inserido
    this.route.params.subscribe((params) => {
      if (params['searchItem']) this.searchItem = params['searchItem'];
    });
  }

  //Metodo de procura de pratos e definição da sua rota
  search(): void {
    if (this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem);
  }
}
