import { Component, OnInit } from '@angular/core';
import { FoodsRecipeServiceService } from '../foods-recipe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foods-recipe-detail',
  templateUrl: './foods-recipe-detail.page.html',
  styleUrls: ['./foods-recipe-detail.page.scss'],
})
export class FoodsRecipeDetailPage implements OnInit {
  foodRecipesDetail:any;
  constructor(
    private firebaseService:FoodsRecipeServiceService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let recipeId:string=this.route.snapshot.paramMap.get('id');
    this.foodRecipesDetail=this.firebaseService.getFoodsRecipeDetail(recipeId)
    .subscribe(data=>{
      this.foodRecipesDetail=data;
    })
  }

}
