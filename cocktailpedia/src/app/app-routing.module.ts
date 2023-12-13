import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCocktailComponent } from './cocktail/show-cocktail/show-cocktail.component';
import { ListCocktailComponent } from './cocktail/list-cocktail/list-cocktail.component';

const routes: Routes = [
  { path: 'cocktail', component: ShowCocktailComponent },
  { path: 'cocktail/:id', component: ShowCocktailComponent },
  { path: '', component : ListCocktailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
