import { Component, OnInit } from '@angular/core';
import { staticProductDetail} from './products-category-body.model';

@Component({
  selector: 'app-products-category-body',
  templateUrl: './products-category-body.component.html',
  styleUrls: ['./products-category-body.component.scss']
})
export class ProductsCategoryBodyComponent implements OnInit {
  productDetail: Array<{
    img: string,
    _id: string,
    category:string,
    product: string,
    list: string,
    start_price: number,
    quantity:number
    }> = staticProductDetail;
  constructor() { }

  ngOnInit() {
    console.log(this.productDetail.length);
  }
  imageStyle(img) {
    return {
      'height': '200px',
      'width': '200px',
      'background-image':  `url('../../../assets/images/our-team/${img}')`
    };
  }
}
