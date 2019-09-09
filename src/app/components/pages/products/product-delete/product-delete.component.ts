import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
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

  deleteProduct(item) {

    this.service.delete(item)
      .subscribe(
        (res: Result) => {
          alert(res.message);
        },
        (err) => {
          alert("erro");
        },
        () => { }
      );
  }
}
