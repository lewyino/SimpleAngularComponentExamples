import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Input() userValue: {name: string, login: string} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
