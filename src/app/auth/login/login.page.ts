import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('buttonLogin') buttonLogin?: ElementRef;
  isLoading = false;
  isPasswordVisibile = false;
  showErrorAlert = false;
  typePassword = 'password';
  user = {
    email: '',
    password: '',
  };
  constructor(
    private readonly authService: AuthService,
    private readonly localstorageService: LocalstorageService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.authService.login(this.user).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['home']);
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
