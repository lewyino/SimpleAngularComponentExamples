import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom, // check how works with comment this line
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
