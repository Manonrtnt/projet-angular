import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCocktailComponent } from './cocktail/show-cocktail/show-cocktail.component';
import { ListCocktailComponent } from './cocktail/list-cocktail/list-cocktail.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
  { path: 'cocktails', loadChildren: () => import('./cocktail/cocktail.module').then(m => m.CocktailModule) },
  { path: 'cocktail/:id', component: ShowCocktailComponent },
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
