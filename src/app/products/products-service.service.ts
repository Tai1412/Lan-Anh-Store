import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(
    public afs:AngularFirestore,
  ) { }

  getProducts()
  {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('products',sort=>sort.orderBy("title","asc")).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  getProductDetail(productId: string) {
    return this.afs.collection('products').doc(productId).valueChanges();
  }
}
