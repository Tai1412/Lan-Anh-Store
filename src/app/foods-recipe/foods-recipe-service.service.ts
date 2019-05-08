import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FoodsRecipeServiceService {

  constructor(
    public afs:AngularFirestore,
  ) { }
  getFoodsRecipe()
  {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('recipes').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }
  getFoodsRecipeDetail(recipeId: string) {
    return this.afs.collection('recipes').doc(recipeId).valueChanges();
  }
}
