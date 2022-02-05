import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddproductService } from './services/addproduct.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

ProductForm !: FormGroup
actionBtn : string = "Save";
actionForm : string = "Add";

  constructor(private productFormBuilder: FormBuilder, private productApi: AddproductService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
     private dialogRef: MatDialogRef<ProductdetailsComponent>) { }

  ngOnInit(): void {

    this.ProductForm = this.productFormBuilder.group({
      productName: ["", Validators.required],
      category: ["", Validators.required],
      date: ["", Validators.required],
      price: ["", Validators.required],
      description: ["", Validators.required],
    })

    if(this.editData){
      this.actionForm = "Update"
      this.actionBtn = "Update"
      this.ProductForm.controls["productName"].setValue(this.editData.productName);
      this.ProductForm.controls["category"].setValue(this.editData.category);
      this.ProductForm.controls["date"].setValue(this.editData.date);
      this.ProductForm.controls["price"].setValue(this.editData.price);
      this.ProductForm.controls["description"].setValue(this.editData.description);
    }

  }

  addProduct(){
    if(!this.editData){
      if(this.ProductForm.valid){
        this.productApi.addProduct(this.ProductForm.value)
        .subscribe({
          next:(res)=>{
            alert("Product added successfuly");
            this.ProductForm.reset();
            this.dialogRef.close('save');
          },
          error:(err)=>{
            alert("Error in adding product");
          }
        })
      }
    }else{
      this.updateProduct();
    }
  }

  updateProduct(){
    this.productApi.putProduct(this.ProductForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product Updated successfuly");
        this.ProductForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        alert("Error in Update Product")
      }
    })
  }

}
