import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpService } from '../shared/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: any[];
  productForm: FormGroup;
  categoryFilter: string = '';
  sortParam: string = 'price1';

  constructor(private http: HttpService, private router: Router) {}

  async ngOnInit() {
    await this.getProducts();
  }

  async getProducts() {
    await this.http
      .getProducts()
      .then((w: any[]) => {
        this.products = w;
        console.log(this.products);
      })
      .catch((e) => console.log(e));
  }
  async disableStatus(id: any) {
    let product = this.products.filter((ell) => ell.id === id)[0];
    product.status =
      product.status == 'not purchased' ? 'purchased' : 'not purchased';
    await this.http.putProduct(product, id);
    this.products = [];
    await this.getProducts();
  }
}
