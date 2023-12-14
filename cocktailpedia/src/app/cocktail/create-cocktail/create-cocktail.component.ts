import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICocktail } from '../models/cocktail.models';

@Component({
  selector: 'app-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.css']
})
export class CreateCocktailComponent implements OnInit {
  @Output()
  newCocktailEvent = new EventEmitter<ICocktail>();

  ingredients: string[] = ["Apple", "Banana", "Orange"];
  constructor(private fb: FormBuilder) { }
  cocktailForm!: FormGroup;

  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      nameCocktail: [''],
      ingredient: this.fb.group({
        nameIngredient: [''],
        quantity: [''],
      }),
      image: [''],
    });
  }

  onSubmit() {
    console.log(this.cocktailForm.value);
    this.addNewCocktail(this.cocktailForm.value);

  }

  addNewCocktail(cocktail: ICocktail) {
    this.newCocktailEvent.emit(cocktail);
  }
}
