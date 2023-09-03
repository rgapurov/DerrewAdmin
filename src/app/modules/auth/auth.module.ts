import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DefaultLayoutComponent } from 'src/app/containers/default-layout/default-layout.component';


const routes : Routes = [
   {
    path: '',
    component:LoginComponent
   }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
