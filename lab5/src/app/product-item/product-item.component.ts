import { Component, OnInit} from '@angular/core';
import {categories} from '../categories';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})


export class ProductItemComponent implements OnInit {
  
  categories = categories;
  products;
  categoryIdFromRoute;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = this.categories.find(category => category.id === this.categoryIdFromRoute).products;
  }

  onNotify():void {
    window.alert('You will be notified when the product goes on sale');
  }

  share(link, description) {
    let l = "https://t.me/share/url?url=" + link + "&text=" + description;
    window.open(l, "_blank");
  }

  like(product: any) {
    if(this.products.isLiked === false){
      product.like += 1;
    }
    else{
      product.like -= 1;
    }
    this.products.isLiked=!this.products.isLiked;
  } 
  
  remove(product: any) {
    this.products.splice(product.id - 1, 1);
  }

}
