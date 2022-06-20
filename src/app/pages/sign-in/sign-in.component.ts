import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../partilhado/modelos/user';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  user = new User();
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
    this.profileForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.min(3)]],
      password: ['', [Validators.required, Validators.min(8)]],
      firstName: ['', [Validators.required, Validators.min(3)]],
      lastName: ['', [Validators.required, Validators.min(3)]],
      address: ['', [Validators.required, Validators.min(10)]],
      cPostal: [
        '',
        [Validators.required, , Validators.max(4), , Validators.min(4)],
      ],
      locality: ['', [Validators.required, , Validators.min(3)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userDistrict: ['', [Validators.required, , Validators.min(4)]],
    });
  }

  onClickCreateUser() {
    this.user.username = this.profileForm.controls['username'].value;
    console.log('username-> ', this.user.username);
    this.user.password = this.profileForm.controls['password'].value;
    this.user.fName = this.profileForm.controls['firstName'].value;
    this.user.lName = this.profileForm.controls['lastName'].value;
    this.user.adress = this.profileForm.controls['address'].value;
    this.user.cp = this.profileForm.controls['cPostal'].value;
    this.user.local = this.profileForm.controls['locality'].value;
    this.user.email = this.profileForm.controls['userEmail'].value;
    this.user.district = this.profileForm.controls['userDistrict'].value;

    console.log('Form-> ', this.user);
    if (this.userService.createUser(this.user)) {
      alert('Registo Efetuado com Sucesso! Pode proceder para Login');
      this.router.navigateByUrl('userlogin');
    } else {
      alert('Não Foi possivel efetuar o Registo!!');
    }
  }
}
