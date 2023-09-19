import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  constructor(
    private readonly apiService: ApiService,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  login(body: any) {
    return this.apiService.post('login', body).pipe(
      tap((response: any) => {
        this.tokenService.saveToken(response.authorisation.token);
        this.userService.saveUser(response.data);
      })
    );
  }

  logout() {
    return this.apiService.post('logout', {});
  }
}
