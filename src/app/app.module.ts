import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './shared/app-nav-bar/app-nav-bar.component';
import { CharactersComponent } from './components/characters/characters.component'

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
