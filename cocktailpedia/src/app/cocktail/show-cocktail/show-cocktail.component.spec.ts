import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCocktailComponent } from './show-cocktail.component';

describe('ShowCocktailComponent', () => {
  let component: ShowCocktailComponent;
  let fixture: ComponentFixture<ShowCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

