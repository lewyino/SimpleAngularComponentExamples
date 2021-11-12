import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cmp-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  @Output() eventFromComponent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.eventFromComponent.emit('value send to parent'); // event value to parent
  }

}
