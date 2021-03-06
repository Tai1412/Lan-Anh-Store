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
  { path: 'store-profile-information', loadChildren: './store-profile-information/store-profile-information.module#StoreProfileInformationPageModule',canActivate:[AuthGuard], },
  { path:'',loadChildren:'./tabs/tabs.module#TabsPageModule',canActivate:[AuthGuard],},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
