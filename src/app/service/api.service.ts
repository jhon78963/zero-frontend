import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  BASE_URL = environment.BASE_URL;
  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, headers?: any) {
    return this.http.get<T>(`${this.BASE_URL}/${path}`, { headers });
  }

  post<T>(path: string, body: any, headers?: any) {
    return this.http.post<T>(`${this.BASE_URL}/${path}`, body, { headers });
  }

  put<T>(path: string, body: any, headers?: any) {
    return this.http.put<T>(`${this.BASE_URL}/${path}`, body, { headers });
  }

  patch<T>(path: string, body: any, headers?: any) {
    return this.http.patch<T>(`${this.BASE_URL}/${path}`, body, { headers });
  }

  delete<T>(path: string, headers?: any) {
    return this.http.delete<T>(`${this.BASE_URL}/${path}`, { headers });
  }
}
