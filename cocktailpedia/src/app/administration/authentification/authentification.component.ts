import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  userForm!: FormGroup;
  ngOnInit(): void {
    this.userForm = this.fb.group({
      nameCocktail: [''],
      ingredient: this.fb.group({
        nameIngredient: [''],
        quantity: [''],
      }),
      image: [''],
    });
  }
  onSubmit() {
    console.log('login');
  }
}
