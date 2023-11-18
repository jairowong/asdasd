import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'login', component: LoginComponent },
{ path: "backoffice", component: PrivateComponent },
{ path: "padre", component: PadreComponent },
{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
