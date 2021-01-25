import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../shared/http/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  id;
  product: any;

  productForm: FormGroup;
  @Output() onAddProduct = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.productForm = new FormGroup({
      name: new FormControl(
        { value: this.product ? this.product.name : '', disabled: false },
        [Validators.required]
      ),
      count: new FormControl(
        { value: this.product ? this.product.count : '', disabled: false },
        [Validators.required, Validators.pattern('[0-9]*')]
      ),
      status: new FormControl({
        value: this.product ? this.product.status : 'not purchased',
        disabled: false,
      }),
    });
  }

  async addProduct() {
    await this.http.postProduct(this.productForm.value);
    this.onAddProduct.emit();
    this.generateForm();
    // this.productForm.value.name.value = '';
    // this.productForm.value.count.value = '';
    // .then(() => this.router.navigate(['/catalog']))
    // .catch((e) => console.log(e));
  }
}
