import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public user = { name: 'Mateusz', login: 'lewyino' };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.user.login = 'login changed once';
    }, 4000);
    setTimeout(() => {
      this.user = {
        ...this.user,
        login: 'login changed twice',
      };
    }, 8000);
  }

}
