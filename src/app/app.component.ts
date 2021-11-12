import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SimpleAngularComponentExamples';

  public dataFromChild: string | undefined;
  public dataTwoWayBinding: string = 'init value for two-way-binding';

  onEventFromComponent(event: string) { //event = data emitted by component
    this.dataFromChild = event;
  }
}
