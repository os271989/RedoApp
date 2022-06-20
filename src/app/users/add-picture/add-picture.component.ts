import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css'],
})
export class AddPictureComponent implements OnInit {
  fileToUpload: File | null = null;
  formTeste: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
