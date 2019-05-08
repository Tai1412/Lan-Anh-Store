import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodsRecipeDetailPage } from './foods-recipe-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsRecipeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodsRecipeDetailPage]
})
export class FoodsRecipeDetailPageModule {}
