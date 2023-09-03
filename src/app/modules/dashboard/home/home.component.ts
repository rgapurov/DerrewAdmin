import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { UserResponseModel } from 'src/app/core/models/response/user-response.model';

import { ApiService } from 'src/app/core/services/api.service';

import annotationPlugin from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,AfterViewInit {
  
  constructor(
    private router: Router,
    private apiService: ApiService,
  ) {
    
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    
  }
 
}
