import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule, FormModule, ToastModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';     
import { MenuItem, MessageService } from 'primeng/api'; 
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { Component } from '@angular/core';




@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    FormModule, FormsModule, TableModule,
    ButtonModule, AccordionModule,
    ToastModule, CalendarModule, SliderModule, MultiSelectModule, ContextMenuModule, DialogModule,DropdownModule,ProgressBarModule,InputTextModule, Component
  ]
})
export class DashboardModule { }
