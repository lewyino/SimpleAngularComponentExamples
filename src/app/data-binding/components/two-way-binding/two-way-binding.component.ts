import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cmp-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  @Input() value: string | undefined; // twa way binding with propertyName
  @Output() valueChange = new EventEmitter<string>(); // and event with propertyNameChange

  constructor() { }

  ngOnInit(): void {
  }

  onButtonChangeValue() {
    this.value = 'value changed in component';
    this.valueChange.emit(this.value);
  }

}
