import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/pages/products/product-list/product-list.component';
import { ProductEditorComponent } from './components/pages/products/product-editor/product-editor.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { MasterComponent } from './components/pages/products/master/master.component';
import { ProductCreateComponent } from './components/pages/products/product-create/product-create.component';
import { ProductDeleteComponent } from './components/pages/products/product-delete/product-delete.component';
import { ManagerGuard } from './guards/manager.guard';
import { LoginComponent } from './components/pages/users/login/login.component';
import { SignupComponent } from './components/pages/users/signup/signup.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: "",
    component: MasterComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { path: "", component: ProductListComponent },
      { path: "create", component: ProductCreateComponent },
      { path: "editor", component: ProductEditorComponent },
      { path: "delete", component: ProductDeleteComponent, canActivate: [ManagerGuard] }
    ]
  },
  { path: "edit", component: ProductEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
