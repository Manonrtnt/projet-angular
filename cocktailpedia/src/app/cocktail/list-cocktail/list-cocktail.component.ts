import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '@cocktail/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cocktail',
  templateUrl: './list-cocktail.component.html',
  styleUrls: ['./list-cocktail.component.css']
})
export class ListCocktailComponent implements OnInit {


  listCocktail!: ICocktail[];
  selectedCocktailId: string | null = null;
  constructor(private cocktailService: CocktailService, private router: Router) { }
  ngOnInit(): void {
    this.cocktailService.getListHeros().subscribe({
      next: (listCocktail) => {
        this.listCocktail = listCocktail;
      }
    })
  }

  viewCocktail(id: string): void {
    this.selectedCocktailId = id;
    this.router.navigate(['/cocktails', 'view', id]);
    console.log(this.selectedCocktailId)

  }


}
