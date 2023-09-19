import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  constructor(private readonly localstorageService: LocalstorageService) {
    this.user = localstorageService.get('user');
  }

  ngOnInit() {
    console.log(this.user);
  }
}
