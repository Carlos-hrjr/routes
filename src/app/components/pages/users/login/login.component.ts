import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserUtil } from 'src/app/utils/user.util';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    console.log(this.form.value);
    this.service.authenticate(this.form.value)
      .subscribe(
        (res: User) => {
          console.log(res);
          UserUtil.save(res);
          this.route.navigate(['']);
        }
      );
  }
}
