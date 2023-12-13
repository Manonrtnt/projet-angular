import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '../models/cocktail.models';

@Component({
  selector: 'app-list-cocktail',
  templateUrl: './list-cocktail.component.html',
  styleUrls: ['./list-cocktail.component.css']
})
export class ListCocktailComponent implements OnInit {
  listCocktail!: ICocktail[];
  selectedCocktailId: string | null = null;
  constructor(private cocktailService: CocktailService) { }
  ngOnInit(): void {
    this.cocktailService.getListHeros().subscribe({
      next: (listCocktail) => {
        this.listCocktail = listCocktail;
      }
    })
  }

  viewCocktail(id: string): void {
    this.selectedCocktailId = id;
    console.log(this.selectedCocktailId)
  }
}
