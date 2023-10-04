import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  user: any;

  constructor(private readonly localstorageService: LocalstorageService) {
    this.user = localstorageService.get('user');
  }

  ngOnInit() {
    console.log(this.user);
  }

}
