import { Injectable, OnInit } from '@angular/core';
import { User } from '../partilhado/modelos/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { USERSdb } from './userDB';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private user: User = new User();
  users: User[] = this.uploadUsers();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    //localStorage.setItem('usersDB', JSON.stringify(this.users));
  }

  uploadUsers(): User[] {
    //let users = require('/src/assets/users.json');
    localStorage.setItem('usersDB', JSON.stringify(USERSdb));
    console.log('Carregados-> ', USERSdb);
    return USERSdb;
  }

  createUser(user: User): Boolean {
    if (!localStorage.getItem(user.username)) {
      const last = this.users.length;
      user.id = this.users[last - 1].id + 1;
      this.users.push(user);
      localStorage.setItem('usersDB', JSON.stringify(this.users));
      console.log('Storage -> ', localStorage);
      console.log('Array-> ', this.users);
      return true;
    }
    return false;
  }

  login(user: User): User | null {
    console.log('Users->', this.users);
    const checkUser = this.users.find(
      (userIN: { username: string }) => userIN.username == user.username
    );
    if (checkUser) {
      return checkUser;
    } else {
      return null;
    }
  }

  getAllUser(): User[] {
    console.log('getAll-> ', this.users);
    return this.users;
  }

  getUserById(id: number): User {
    const aux = this.getAllUser().find((user) => user.id == id)!;
    console.log('aux-> ', aux);
    return aux;
  }

  updateUserInfo(user: User): boolean {
    const aux = this.getAllUser().findIndex((userin) => userin.id === user.id);
    if (aux != -1) {
      this.users[aux] = user;
      localStorage.setItem('usersDB', JSON.stringify(this.users));

      return true;
    }
    return false;
  }

  removeUser(id: number): boolean {
    delete this.users[this.getAllUser().findIndex((userin) => userin.id == id)];
    return true;
  }
}
