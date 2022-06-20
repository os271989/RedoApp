//Criação de classe com seus atributos para cada prato
export class Foods {
  id!: number;
  preco!: number;
  nome!: string;
  favorito: boolean = false;
  star: number = 0;
  tags?: string[];
  imageUrl!: string;
  fornecedor!: string;
}
