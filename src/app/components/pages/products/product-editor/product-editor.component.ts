import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Result } from 'src/app/models/result.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnChanges {
  public form: FormGroup;
  @Input() product: Product = new Product();
  public categories: any[] = [
    { "id": "Cachaça", "title": "Cachaça" },
    { "id": "Salgado", "title": "Salgado" },
    { "id": "Esportes", "title": "Esportes" }
  ];

  constructor(
    private builder: FormBuilder,
    private service: ProductService
  ) {
    this.form = this.builder.group({
      id: [this.product.id, Validators.required, Validators],
      title: [this.product.title, Validators.required],
      price: [this.product.price, Validators.required],
      description: [this.product.description, Validators.required],
      amount: [this.product.amount, Validators.required],
      category: [this.product.category, Validators.required]
    })
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.controls['id'].setValue(this.product.id);
    this.form.controls['title'].setValue(this.product.title);
    this.form.controls['price'].setValue(this.product.price);
    this.form.controls['description'].setValue(this.product.description);
    this.form.controls['amount'].setValue(this.product.amount);
    this.form.controls['category'].setValue(this.product.category);

  }

  submit() {
    this.form.disable();

    this.service.update(this.form.value)
      .subscribe(
        (res: Result) => {
          alert(res.message);
        },
        (err) => {
          alert(err.message);
        },
        () => {
          this.form.enable();
        },
      );
  }

}
