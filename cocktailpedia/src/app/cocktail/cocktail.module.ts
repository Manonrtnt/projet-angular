import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCocktailComponent } from './create-cocktail/create-cocktail.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCocktailComponent } from './list-cocktail/list-cocktail.component';
import { CocktailService } from './cocktail.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import { ShowCocktailComponent } from './show-cocktail/show-cocktail.component';

@NgModule({
  declarations: [
    CreateCocktailComponent,
    ListCocktailComponent,
    ListIngredientComponent,
    ShowCocktailComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    CreateCocktailComponent,
    ListCocktailComponent,
    ListIngredientComponent
  ],
  providers: [
    CocktailService
  ]
})
export class CocktailModule { }
