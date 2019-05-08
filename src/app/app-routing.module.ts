import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth.guard';
const routes: Routes = [
  { path: '',
   redirectTo:'login',
   pathMatch:'full' 
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path:'',loadChildren:'./tabs/tabs.module#TabsPageModule',canActivate:[AuthGuard],},
  { path: 'product-detail', loadChildren: './products/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'foods-recipe', loadChildren: './foods-recipe/foods-recipe.module#FoodsRecipePageModule' },
  { path: 'foods-recipe-detail', loadChildren: './foods-recipe/foods-recipe-detail/foods-recipe-detail.module#FoodsRecipeDetailPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
