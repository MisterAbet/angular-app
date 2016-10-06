import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DataTableModule,SharedModule,InputTextModule} from 'primeng/primeng';
import '../../node_modules/primeng/resources/themes/start/theme.css'
import '../../node_modules/primeng/resources/primeng.min.css';
@NgModule({
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule,
    InputTextModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }