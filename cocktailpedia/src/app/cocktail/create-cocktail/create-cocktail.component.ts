import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-cocktail',
  templateUrl: './create-cocktail.component.html',
  styleUrls: ['./create-cocktail.component.css']
})
export class CreateCocktailComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  cocktailForm!: FormGroup;

  ngOnInit(): void {
    this.cocktailForm = this.fb.group({
      name: [''],
      quantity: [''],
    });


  }

  onSubmit() {
    console.log(this.cocktailForm.value)
  }
}
