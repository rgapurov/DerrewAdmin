import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/response/product-response.model';
import { GelsinService } from 'src/app/core/services/gelsin.service';
import { Table } from 'primeng/table';
import { CategoryResponse } from 'src/app/core/models/response/category-response.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  categoryList: CategoryResponse[] = [];
  groupedSub: any[] = [];
  tableSize = 'p-datatable-sm';
  filterSize = 'p-columnFilter-sm';

  constructor(private gelsinService: GelsinService) { }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }
  AddProduct() {

  }
  getAllCategories(){
    this.gelsinService.getAllCategories().subscribe((res) => {
      {
      this.categoryList = [];
       if(res.status == 0){
         this.categoryList = res.data;
         this.setSubcategoryForFilter();         
       } 
      }
    });
  }
  getAllProducts(){
      this.gelsinService.getAllProducts().subscribe((res) => {
      {
      this.productList = [];
        if(res.status == 0){
          this.productList = res.data;
          console.log(this.productList);
          
        } 
      }
    });
  }
  clear(table: Table) {
      table.clear();
  }
  setSubcategoryForFilter() {  
    this.categoryList.forEach(cat => {
      var catItems: any [] = [];
      cat.subcategory.forEach(subcat => {
        var item = {
          label: subcat.name,
          value: subcat.name
        }
        catItems.push(item);
      });
      var cats = {
        label: cat.name,
        value: cat.name,
        image: cat.imageUrl,
        items: catItems
      }
      this.groupedSub.push(cats);      
    });
  }
}
