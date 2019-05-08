import { Component, OnInit } from '@angular/core';
import { FoodsRecipeServiceService } from './foods-recipe-service.service';

@Component({
  selector: 'app-foods-recipe',
  templateUrl: './foods-recipe.page.html',
  styleUrls: ['./foods-recipe.page.scss'],
})
export class FoodsRecipePage implements OnInit {
  public foodRecipes:Array<any>=[];
  constructor(
    private firebaseService:FoodsRecipeServiceService
  )
    { }

  ngOnInit() {
    this.firebaseService.getFoodsRecipe().then(data=>{
        this.foodRecipes=data;
     })
  }

}
