import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ServiceWorkerModule} from '@angular/service-worker'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
ServiceWorkerModule.register('ngsw-worker.js',{
  enabled:true,
  registrationStrategy:'registerWhenStable:30000',
})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
