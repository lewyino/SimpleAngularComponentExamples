import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  encapsulation: ViewEncapsulation.None, // check how works with comment this line,
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
