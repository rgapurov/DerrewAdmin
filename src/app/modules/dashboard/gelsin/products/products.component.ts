import { Component, OnInit } from '@angular/core';
import { GelsinService } from 'src/app/core/services/gelsin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private gelsinService: GelsinService) { }

  ngOnInit() {
  }
  AddProduct() {
    document.getElementById("spinner")?.classList.remove("d-none")
    window.location.href = "#/products/create"
}

}
