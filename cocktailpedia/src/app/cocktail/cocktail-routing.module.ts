import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';

const routes: Routes = [
    {
        path: 'cocktails', children: [
            { path: 'cocktails', component: ListCocktailComponent },
            { path: 'create', component: CreateCocktailComponent }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CocktailRouterModule { }
