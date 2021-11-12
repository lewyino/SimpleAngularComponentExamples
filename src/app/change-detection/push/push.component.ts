import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushComponent implements OnInit {

  @Input() userValue: {name: string, login: string} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
