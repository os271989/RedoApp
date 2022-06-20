import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../partilhado/modelos/Tag';
import { PratosService } from '../services/food/pratos.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  paginaPratosTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[] = [];

  constructor(private fs: PratosService) {}

  ngOnInit(): void {
    if (!this.paginaPratosTags) this.tags = this.fs.getAllTag();
  }
}
