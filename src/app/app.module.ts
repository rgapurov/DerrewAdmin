import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormModule, HeaderComponent } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CategoriesComponent } from './modules/dashboard/gelsin/categories/categories.component';
import { ProductsComponent } from './modules/dashboard/gelsin/products/products.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SideMenuComponent } from './containers/side-menu/side-menu.component';
import { HeaderMenuComponent} from './containers/header/header.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { UploadImageComponent } from './modules/dashboard/shared/upload-image/upload-image.component';
import { SpinnerInterceptor } from './core/interceps/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent, 
    HomeComponent, CategoriesComponent, ProductsComponent, 
    SideMenuComponent, HeaderMenuComponent,UploadImageComponent 
  ],
  imports: [
    BrowserModule, InputTextModule, 
    BrowserAnimationsModule,InputSwitchModule, 
    AppRoutingModule,ToggleButtonModule,FileUploadModule,
    HttpClientModule,ImageCropperModule,
    FormModule,
    FormsModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    InputNumberModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true, // Birden fazla interceptor kullanılabilirse bu seçeneği true olarak ayarlayın
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
