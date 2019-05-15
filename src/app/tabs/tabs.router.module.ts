import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
      path: 'products',
      children: [
        {
          path: '',
          loadChildren: '../products/products.module#ProductsPageModule'
        },
        {
          path:':id',
          loadChildren:'../products/product-detail/product-detail.module#ProductDetailPageModule'
        }
      ]
    },
    {
      path: 'foods-recipe',
        children: [
          {
            path: '',
            loadChildren: '../foods-recipe/foods-recipe.module#FoodsRecipePageModule'
          },
          {
            path:':id',
            loadChildren:'../foods-recipe/foods-recipe-detail/foods-recipe-detail.module#FoodsRecipeDetailPageModule'
          }
        ]
    },
    {
      path: 'about-us',
        children: [
          {
            path: '',
            loadChildren: '../about-us/about-us.module#AboutUsPageModule'
          },
        ]
    },
      {
        path: '',
        redirectTo: '/tabs/products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
