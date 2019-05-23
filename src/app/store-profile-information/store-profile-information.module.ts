import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoreProfileInformationPage } from './store-profile-information.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProfileInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoreProfileInformationPage]
})
export class StoreProfileInformationPageModule {}
