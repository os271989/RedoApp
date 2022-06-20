import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/partilhado/modelos/user';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  /* profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  }); */
  user: User = new User();
  loginError: boolean;
  clickLoginBtn = false;
  profileForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.clickLoginBtn = true;
    if (this.profileForm.invalid) {
      return;
    }
    console.log(this.profileForm.controls['username'].value);

    this.user.username = this.profileForm.controls['username'].value;
    this.user.password = this.profileForm.controls['password'].value;

    let userAutenticado = this.userService.login(this.user);
    console.log('User->', userAutenticado);
    if (userAutenticado) {
      this.loginError = false;
      this.router.navigateByUrl(`paginaUser/${userAutenticado.id}`);
    } else {
      this.loginError = true;
      console.log('Login incorreto');
    }
  }

  onSignIn(): void {
    this.router.navigateByUrl('signIn');
  }
}
