import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodsRecipePage } from './foods-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsRecipePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodsRecipePage]
})
export class FoodsRecipePageModule {}
