import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { PropertyBindingComponent as PropertyBindingComponent2 } from './data-binding/components/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { EventBindingComponent as EventBindingComponent2 } from './data-binding/components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { TwoWayBindingComponent as TwoWayBindingComponent2 } from './data-binding/components/two-way-binding/two-way-binding.component';
import {FormsModule} from "@angular/forms";
import { FirstComponent } from './encapsulation/first/first.component';
import { SecondComponent } from './encapsulation/second/second.component';
import { ThirdComponent } from './encapsulation/third/third.component';
import { DefaultComponent } from './change-detection/default/default.component';
import { PushComponent } from './change-detection/push/push.component';
import { MainComponent } from './change-detection/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PropertyBindingComponent2,
    EventBindingComponent2,
    TwoWayBindingComponent2,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    DefaultComponent,
    PushComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // needed for two way binding with ngModel (inputs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
