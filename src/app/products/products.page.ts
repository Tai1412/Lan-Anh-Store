import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from './products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public productsList:Array<any>=[];
  constructor(
    private firebaseService:ProductsServiceService
  ) { }

  ngOnInit() {
    this.firebaseService.getProducts().then(data=>{
      this.productsList=data;
    })
  }

}
