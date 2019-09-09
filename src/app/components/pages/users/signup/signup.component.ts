import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { UserUtil } from 'src/app/utils/user.util';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private service: ProductService,
    private fb: FormBuilder,
    private route: Router,
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  ngOnInit() {

  }

  submit() {
    this.service.authenticate(this.form.value)
      .subscribe(
        (res: User) => {
          UserUtil.save(res);
          this.route.navigate(['']);
        }
      );
  }

}
