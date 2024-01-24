import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';
import { ShowCocktailComponent } from './show-cocktail/show-cocktail.component';
import { authGuard } from '../administration/auth.guard';
const routes: Routes = [
    { path: 'create', component: CreateCocktailComponent, canActivate: [authGuard] },
    { path: 'view/:id', component: ShowCocktailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CocktailRouterModule { }
