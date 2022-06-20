import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaginaCarrinhoComponent } from './pages/pagina-carrinho/pagina-carrinho.component';
import { PaginaPratosComponent } from './pages/pagina-pratos/pagina-pratos.component';
import { PaginaUserComponent } from './pages/pagina-user/pagina-user.component';
import { PratosService } from './services/food/pratos.service';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { AddPictureComponent } from './users/add-picture/add-picture.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'pratos/:id', component: PaginaPratosComponent },
  { path: 'pagina-carrinho', component: PaginaCarrinhoComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'paginaUser/:id', component: PaginaUserComponent },
  { path: 'addPicture', component: AddPictureComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
