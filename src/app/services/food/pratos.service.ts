import { Injectable } from '@angular/core';
import { Foods } from 'src/app/partilhado/modelos/food';
import { Tag } from 'src/app/partilhado/modelos/Tag';

@Injectable({
  providedIn: 'root',
})
export class PratosService {
  constructor() {}

  //Função para encontrar um determinado prato passando o seu id por parametro
  getFoodById(id: number): Foods {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll() //Se a tag for All devolve todos os pratos disponiveis
      : //Devolve o resultado da função com o filtro da tag aplicado incluido
        this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { nome: 'All', contagem: 15 },
      { nome: 'Bacalhau', contagem: 2 },
      { nome: 'Carne', contagem: 5 },
      { nome: 'Comida Rapida', contagem: 2 },
      { nome: 'Dieta', contagem: 1 },
      { nome: 'Especialidade', contagem: 5 },
      { nome: 'Peixe', contagem: 3 },
      { nome: 'Sandes', contagem: 4 },
      { nome: 'Snack', contagem: 2 },
      { nome: 'Sopas', contagem: 2 },
      { nome: 'Tradicional', contagem: 4 },
    ];
  }

  //Criar Função para ir buscar todas as imagens ao repositorio

  /*   getAll(): Foods[] {
    const pratos = require('/src/assets//Pratos.json');
    return pratos;
  } */

  getAll(): Foods[] {
    return [
      {
        id: 1,
        preco: 17.5,
        nome: 'Arroz de Tamboril',
        favorito: true,
        star: 4.2,
        tags: ['Peixe', 'Especialidade'],
        imageUrl: 'assets/Imagens/Arroz-tamboril.jpg',
        fornecedor: 'Coma Bem',
      },

      {
        id: 2,
        preco: 22.9,
        nome: 'Bacalhau no forno',
        favorito: true,
        star: 4.0,
        tags: ['Peixe', 'Especialidade', 'Bacalhau'],
        imageUrl: 'assets/Imagens/Bacalhau-no-forno.jpg',
        fornecedor: 'A Furna',
      },

      {
        id: 3,
        preco: 13.75,
        nome: 'Bacalhau a Bras',
        favorito: false,
        star: 3.5,
        tags: ['Peixe', 'Bacalhau'],
        imageUrl: 'assets/Imagens/Bacalhau_a_Bras.jpg',
        fornecedor: 'D.Maria',
      },

      {
        id: 4,
        preco: 3.8,
        nome: 'Baguete atum Pão-normal',
        favorito: false,
        star: 3,
        tags: ['Sandes', 'Comida Rapida'],
        imageUrl: 'assets/Imagens/Baguete-atum-normal.jpg',
        fornecedor: 'Casa Das Sandes',
      },

      {
        id: 5,
        preco: 4.2,
        nome: 'Baguete atum-Pão de sementes',
        favorito: false,
        star: 3.2,
        tags: ['Sandes', 'Comida Rapida'],
        imageUrl: 'assets/Imagens/Baguete-atum-sementes.jpg',
        fornecedor: 'Casa Das Sandes',
      },

      {
        id: 6,
        preco: 5.0,
        nome: 'Bifana no pao',
        favorito: false,
        star: 4.5,
        tags: ['Sandes'],
        imageUrl: 'assets/Imagens/Bifana-no-pao.jpg',
        fornecedor: 'Casa Das Sandes',
      },

      {
        id: 7,
        preco: 12.5,
        nome: 'bifes com cogumelos',
        favorito: false,
        star: 4.0,
        tags: ['Carne', 'Dieta'],
        imageUrl: 'assets/Imagens/bifes-com-cogumelos.jpg',
        fornecedor: 'Coma Bem',
      },

      {
        id: 8,
        preco: 14.5,
        nome: 'cozido a portuguesa',
        favorito: false,
        star: 3.5,
        tags: ['Carne', 'Especialidade', 'Tradicional'],
        imageUrl: 'assets/Imagens/cozido.jpg',
        fornecedor: 'D.Camilo',
      },

      {
        id: 9,
        preco: 11.0,
        nome: 'papas de sarrabulho',
        favorito: false,
        star: 4.7,
        tags: ['Sopas', 'Tradicional'],
        imageUrl: 'assets/Imagens/papas.jpg',
        fornecedor: 'Venha Cá',
      },

      {
        id: 10,
        preco: 18.5,
        nome: 'Posta',
        favorito: true,
        star: 4.8,
        tags: ['Carne'],
        imageUrl: 'assets/Imagens/Posta.jpg',
        fornecedor: 'Coma Bem',
      },

      {
        id: 11,
        preco: 13.6,
        nome: 'rojoes',
        favorito: false,
        star: 5,
        tags: ['Carne', 'Especialidade', 'Tradicional'],
        imageUrl: 'assets/Imagens/rojoes.jpg',
        fornecedor: 'A Furna',
      },

      {
        id: 12,
        preco: 11.65,
        nome: 'Vitela',
        favorito: false,
        star: 4.3,
        tags: ['Carne'],
        imageUrl: 'assets/Imagens/Vitela.jpg',
        fornecedor: 'D.Camilo',
      },

      {
        id: 13,
        preco: 9.5,
        nome: 'Canja',
        favorito: false,
        star: 2.9,
        tags: ['Sopas', 'Tradicional'],
        imageUrl: 'assets/Imagens/Canja.jpg',
        fornecedor: 'A Furna',
      },

      {
        id: 14,
        preco: 8.5,
        nome: 'Francesinha',
        favorito: false,
        star: 4.9,
        tags: ['Snack', 'Especialidade'],
        imageUrl: 'assets/Imagens/Francesinha.jpg',
        fornecedor: 'A Belga',
      },

      {
        id: 15,
        preco: 6.5,
        nome: 'Cachorro Especial',
        favorito: false,
        star: 3.5,
        tags: ['Sandes', 'Snack'],
        imageUrl: 'assets/Imagens/Cachorro.jpg',
        fornecedor: 'A Furna',
      },
    ];
  }
}
