import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  saveUser(user: any) {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  }

  getUser() {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
