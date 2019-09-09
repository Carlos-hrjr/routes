import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/pages/products/product-list/product-list.component';
import { ProductEditorComponent } from './components/pages/products/product-editor/product-editor.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { ProductDeleteComponent } from './components/pages/products/product-delete/product-delete.component';
import { MasterComponent } from './components/pages/products/master/master.component';
import { LoginComponent } from './components/pages/users/login/login.component';
import { SignupComponent } from './components/pages/users/signup/signup.component';
import { ProductCreateComponent } from './components/pages/products/product-create/product-create.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditorComponent,
    MaskDirective,
    LoadingComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    MasterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticatedGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
