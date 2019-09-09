import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { UserUtil } from 'src/app/utils/user.util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public product: Product;

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.service.get()
      .subscribe(
        (res: any) => {
          this.products = res;
        }
      );
  }

  select(product: Product) {
    this.product = product;
  }

  isInRole(): boolean {
    if (UserUtil.isInRole('manager'))
      return true;
    else
      return false;
  }

  newProduct() {
    this.product = new Product();
  }

}
