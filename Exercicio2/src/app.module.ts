import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraAtualService } from './hora.service';
import { HoraAtualComponent } from './hora-atual.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HoraAtualComponent], 
  providers: [HoraAtualService],
  bootstrap: [AppComponent]
})
export class AppModule { }
