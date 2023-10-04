import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor(
    private readonly localstorageService: LocalstorageService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() { }

  public get user(): any {
    return localStorage.getItem('user');
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
