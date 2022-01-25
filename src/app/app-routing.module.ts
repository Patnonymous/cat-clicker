import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGameComponent } from './main-game/main-game.component';

const routes: Routes = [
  { path: 'game', component: MainGameComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' } // Redirect blank route to the game route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
