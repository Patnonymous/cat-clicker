import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGameComponent } from './main-game/main-game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatComponent } from './cat/cat.component';
import { GameFieldComponent } from './game-field/game-field.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent,
    CatComponent,
    GameFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
