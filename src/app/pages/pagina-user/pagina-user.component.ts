import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../partilhado/modelos/user';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-user',
  templateUrl: './pagina-user.component.html',
  styleUrls: ['./pagina-user.component.css'],
})
export class PaginaUserComponent implements OnInit {
  user!: User;
  profileForm: FormGroup;
  sucess: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    //this.user = userService.getUserById(1654);
  }

  ngOnInit(): void {
    console.log('userLogged-> ', this.user);
    this.getUserId();
    this.profileForm = this.formBuilder.group({
      firstName: [this.user.fName, [Validators.required, Validators.min(3)]],
      lastName: [this.user.lName, [Validators.required, Validators.min(3)]],
      address: [this.user.adress, [Validators.required, Validators.min(10)]],
      cPostal: [
        this.user.cp,
        [Validators.required, , Validators.max(4), , Validators.min(4)],
      ],
      locality: [this.user.local, [Validators.required, , Validators.min(3)]],
      userEmail: [this.user.email, [Validators.required, Validators.email]],
      userDistrict: [
        this.user.district,
        [Validators.required, , Validators.min(4)],
      ],
    });
  }

  onClickUpload() {
    this.router.navigateByUrl('/addPicture');
  }

  onUpdate() {
    this.user.fName = this.profileForm.controls['firstName'].value;
    this.user.lName = this.profileForm.controls['lastName'].value;
    this.user.adress = this.profileForm.controls['address'].value;
    this.user.cp = this.profileForm.controls['cPostal'].value;
    this.user.local = this.profileForm.controls['locality'].value;
    this.user.email = this.profileForm.controls['userEmail'].value;
    this.user.district = this.profileForm.controls['userDistrict'].value;

    console.log('Form-> ', this.user);
    const success = this.userService.updateUserInfo(this.user);
    console.log(success);
  }

  getUserId() {
    this.sucess = true;
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.user = this.userService.getUserById(params['id']);
      this.loadUserData(this.user);
    });
  }

  //Carregar formulario com dados do utilizador
  loadUserData(user: User) {
    console.log('userGet->', user);
    this.profileForm.controls['firstName'].setValue(user.fName);
    this.profileForm.controls['lastName'].setValue(user.lName);
    this.profileForm.controls['address'].setValue(user.adress);
    this.profileForm.controls['locality'].setValue(user.local);
    this.profileForm.controls['userEmail'].setValue(user.email);
    this.profileForm.controls['userDistrict'].setValue(user.district);
    this.profileForm.controls['cPostal'].setValue(user.cp);
  }
}
