import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { AddCategory, UpdateCategory } from 'src/app/core/models/request/categories-request.model';
import { GelsinService } from 'src/app/core/services/gelsin.service';
import { CATEGORIES, RESTS } from 'src/app/moc';
import {NgForm} from '@angular/forms';
import { getLocaleEraNames } from '@angular/common';
import { CategoryResponse } from 'src/app/core/models/response/category-response.model';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AddSubcategory, UpdateSubcategory } from 'src/app/core/models/request/subcategories-request.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  addCategory: AddCategory = {
    name: "",
    description: "",
    isActive: true,
    image: "",
    rank:0
  };
  addSubcategory: AddSubcategory = {
    name: "",
    description: "",
    isActive: true,
    image: "",
    categoryId: 0,
    rank:0
  };
  updatedCategory: UpdateCategory = {
    id: 0,
    name: "",
    description: "",
    isActive: true,
    image: "",
    rank:0
  };
  updatedSubcategory: UpdateSubcategory = {
    id: 0,
    categoryId:0,
    name: "",
    description: "",
    isActive: true,
    image: "",
    rank:0
  };
  subcategoryMode:string = 'list';
  categoryMode:string = 'list';
  selectedCatId: number = 0;
  addBtnDisabled = true;
  categoryList: CategoryResponse [] = [];
  uploadImgModal = false;
  confirmDelCat = false;
  confirmDelSubcat = false;
  catNameDeleted = '';
  subcatNameDeleted = '';
  catImgRatio= 1/1;
  deleteId = 0;
  deleteSubcatId = 0;
  imageData = '';

  constructor(private gelsinService: GelsinService) { }

  ngOnInit() {
    this.GetAllCategories();
  }
  GetAllCategories(){
    this.gelsinService.getAllCategories().subscribe((res) => {
      {
      this.categoryList = [];
       if(res.status == 0){
        this.categoryList = res.data;
       } 
      }
    });
  }
  AddCategory() {
    this.addCategory.image = this.imageData;
    this.gelsinService.addCategory(this.addCategory).subscribe((res) => {
      {
        if(res.status == 0){
          this.cancelAddCategory();
          this.GetAllCategories();
        }
        else{
          alert(res.message);
        }
      }
    });
  }
  confirmAddSubcategory() {
    this.addSubcategory.categoryId = this.selectedCatId;
    this.addSubcategory.image = this.imageData;
    this.gelsinService.addSubcategory(this.addSubcategory).subscribe((res) => {
      {
        if(res.status == 0){
          this.cancelAddCategory();
          this.cancelAddSubcategory();
          this.GetAllCategories();
        }
        else{
          alert(res.message);
        }
      }
    });
  }
  selectCategoryId(catId:number){
    this.selectedCatId = catId;
  }
  setCategoryMode(mode: string){
    this.categoryMode = mode;
  }
  setSubcategoryMode(mode: string){
    this.subcategoryMode = mode;
  }
  cancelAddCategory(){
    this.addCategory.name = "";
    this.addCategory.description = "";
    this.addCategory.image = "";
    this.addCategory.isActive = true;
    this.setCategoryMode('list');
    this.imageData = '';
  }
  cancelAddSubcategory(){
    this.setSubcategoryMode('list');
    this.selectedCatId = 0;
    this.addSubcategory = {
      name: "",
      description: "",
      isActive: true,
      image: "",
      categoryId: 0,
      rank:0
    }
    this.imageData = '';
  }
  showDialogUploadImg(){
    this.uploadImgModal = true;
  }
  getImageString(data: string) {
    this.imageData = data;
    this.uploadImgModal = false;
  }
  clearAddCategoryImage(){
    this.addCategory.image = '';
    this.imageData = '';
  }
  confirmDeleteCategory(){
    this.gelsinService.deleteCategory(this.deleteId).subscribe((res) => {
      {
        if(res.status == 0){
          this.cancelDeleteCategory();
        }
        else{
          alert(res.message);
        }
        this.GetAllCategories();
      }
    });
  }
  confirmDeleteSubcategory(){
    this.gelsinService.deleteSubategory(this.deleteSubcatId).subscribe((res) => {
      {
        if(res.status == 0){
          this.cancelDeleteSubcategory();
        }
        else{
          alert(res.message);
        }
        this.GetAllCategories();
      }
    });
  }
  deleteCategory(name:string, id:number){
    this.catNameDeleted = name;
    this.confirmDelCat = true;
    this.deleteId = id;
  }
  deleteSubcategory(name:string, id:number){
    this.subcatNameDeleted = name;
    this.confirmDelSubcat = true;
    this.deleteSubcatId = id;
  }
  cancelDeleteCategory(){
    this.catNameDeleted = '';
    this.confirmDelCat = false;
    this.deleteId = 0;
  }
  cancelDeleteSubcategory(){
    this.subcatNameDeleted = '';
    this.confirmDelSubcat = false;
    this.deleteSubcatId = 0;
  }
  updateCategory(category:any){
    this.cancelAddCategory();
    this.clearUpdatedCategory();
    this.cancelAddSubcategory();
    this.setCategoryMode('edit');

    this.updatedCategory = {
      id: category.id,
      name: category.name,
      description: category.description,
      isActive: category.isActive,
      image: category.imageUrl,
      rank:category.rank
    };
  }
  updateSubcategory(subcategory:any){
    this.cancelAddCategory();
    this.cancelAddSubcategory();
    this.clearUpdatedSubcategory();
    this.setSubcategoryMode('edit');

    this.updatedSubcategory = {
      id: subcategory.id,
      categoryId: subcategory.categoryId,
      name: subcategory.name,
      description: subcategory.description,
      isActive: subcategory.isActive,
      image: subcategory.imageUrl,
      rank:subcategory.rank
    };
  }
  clearUpdatedCategory(){
    this.updatedCategory = {
      id: 0,
      name: "",
      description: "",
      isActive: true,
      image: "",
      rank:0
    }
    this.imageData = '';
  }
  clearUpdatedSubcategory(){
    this.updatedSubcategory = {
      id: 0,
      categoryId:0,
      name: "",
      description: "",
      isActive: true,
      image: "",
      rank:0
    }
    this.imageData = '';
  }
  confirmUpdate(){
    this.updatedCategory.image =this.imageData != '' ? this.imageData : this.updatedCategory.image;
    this.gelsinService.updateCategory(this.updatedCategory).subscribe((res) => {
      {
        if(res.status == 0){
          this.clearUpdatedCategory();
          this.GetAllCategories();
        }
        else{
          alert(res.message);
        }
      }
    });
  }
  confirmUpdateSubcategory(){
    this.updatedSubcategory.image =this.imageData != '' ? this.imageData : this.updatedSubcategory.image;
    this.gelsinService.updateSubcategory(this.updatedSubcategory).subscribe((res) => {
      {
        if(res.status == 0){
          this.clearUpdatedSubcategory();
          this.GetAllCategories();
        }
        else{
          alert(res.message);
        }
      }
    });
  }
  changeIsActiveUpdateCategory(){
    this.updatedCategory.isActive = !this.updatedCategory.isActive;
  }
  changeIsActiveUpdateSubcategory(){
    this.updatedSubcategory.isActive = !this.updatedSubcategory.isActive;
  }
  clearUpdateImg(){
    this.updatedCategory.image = '';
    this.updatedSubcategory.image ='';
    this.imageData = '';
  }
}
