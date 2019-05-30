import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from './products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public productsList:Array<any>=[];
  public loadedProductList:any[];
  constructor(
    private firebaseService:ProductsServiceService
  ) { }

  ngOnInit() {
    this.firebaseService.getProducts().then(data=>{
      this.productsList=data;
      this.loadedProductList=data;
      console.log(this.loadedProductList);
    })
  }
  initializeProducts():void{
    this.productsList=this.loadedProductList;//debug , hack
  }
  filterProduct(event){
    this.initializeProducts();
    const searchTerm=event.srcElement.value;

    if(!searchTerm){
      return; //return nothing if it is empty
    }
    this.productsList=this.productsList.filter(currentProduct=>{
      if(currentProduct.payload.doc.data().title && searchTerm){
        if(currentProduct.payload.doc.data().title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

}
