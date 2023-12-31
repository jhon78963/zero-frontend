import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../service/localstorage.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  constructor(
    private readonly localstorageService: LocalstorageService,
    private readonly authService: AuthService,
    private readonly router: Router) {
    this.user = localstorageService.get('user');
  }

  ngOnInit() {
    console.log(this.user);
  }

  logout() {
    this.authService.logout().subscribe();
    this.localstorageService.remove('user');
    this.router.navigate(['']);
  }

  goToProfile() {
    this.router.navigate(['private', 'profile']);
  }
}
