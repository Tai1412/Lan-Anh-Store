import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productDetail:any;
  constructor(
    private firebaseService:ProductsServiceService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let productId:string=this.route.snapshot.paramMap.get('id');
    this.productDetail=this.firebaseService.getProductDetail(productId)
    .subscribe(data=>{
      this.productDetail=data;
    })
  }

}
