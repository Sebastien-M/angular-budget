import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';



@NgModule({
  declarations: [
    AppComponent,
    BudgetManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
