import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public form: FormGroup;
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
      id: ['', Validators.required, Validators],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['Cachaça', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {
    this.form.disable();

    this.service.save(this.form.value)
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
