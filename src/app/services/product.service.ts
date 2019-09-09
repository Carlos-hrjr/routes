import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }

  getAddressByZipcode() {
    return this.http
      .get('http://localhost:3000/address/134000000');
  }

  get() {
    return this.http.get('http://localhost:3000/products');
  }

  save(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  update(product: Product) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }

  delete(product: Product) {
    return this.http.delete(`http://localhost:3000/products/${product.id}`);
  }

  authenticate(data: any) {
    return this.http.post('http://localhost:3000/accounts/authenticate', data);
  }
}
