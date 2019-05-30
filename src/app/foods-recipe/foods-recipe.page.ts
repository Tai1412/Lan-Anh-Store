import { Component, OnInit } from '@angular/core';
import { FoodsRecipeServiceService } from './foods-recipe-service.service';

@Component({
  selector: 'app-foods-recipe',
  templateUrl: './foods-recipe.page.html',
  styleUrls: ['./foods-recipe.page.scss'],
})
export class FoodsRecipePage implements OnInit {
  public foodRecipes:Array<any>=[];
  public loadedRecipe:any[];
  constructor(
    private firebaseService:FoodsRecipeServiceService
  )
    { }

  ngOnInit() {
    this.firebaseService.getFoodsRecipe().then(data=>{
        this.foodRecipes=data;
        this.loadedRecipe=data;
     })
  }
  initializeRecipe():void{
    this.foodRecipes=this.loadedRecipe;//debug , hack
  }
  filterRecipe(event){
    this.initializeRecipe();
    const searchTerm=event.srcElement.value;

    if(!searchTerm){
      return; //return nothing if it is empty
    }
    this.foodRecipes=this.foodRecipes.filter(currentRecipe=>{
      if(currentRecipe.payload.doc.data().title && searchTerm){
        if(currentRecipe.payload.doc.data().title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

}
