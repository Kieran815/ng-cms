import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// CRUD components
import { UsersComponent }   from './users/users.component';
import { ArticlesComponent } from './articles/articles.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { UserEditComponent }   from './user-edit/user-edit.component';
import { ArticleEditComponent }   from './article-edit/article-edit.component';
// AUTH components
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  // AUTH
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  // USERS
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  // ARTICLES
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/view/:id', component: ArticleViewComponent },
  { path: 'articles/create', component: ArticleCreateComponent },
  { path: 'articles/edit/:id', component: ArticleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
