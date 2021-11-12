import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cmp-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  @Input() valueFromParent: string | undefined; // @Input for set data from parent

  constructor() { }

  ngOnInit(): void {
  }

}
