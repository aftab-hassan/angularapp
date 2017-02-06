import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,JsonpModule],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
         
 }
