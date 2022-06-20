import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { PaginaCarrinhoComponent } from './pages/pagina-carrinho/pagina-carrinho.component';
import { PaginaPratosComponent } from './pages/pagina-pratos/pagina-pratos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddPictureComponent } from './users/add-picture/add-picture.component';
import { PaginaUserComponent } from './pages/pagina-user/pagina-user.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    PaginaUserComponent,
    PaginaCarrinhoComponent,
    PaginaPratosComponent,
    NotFoundComponent,
    UserLoginComponent,
    AddPictureComponent,
    SignInComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
