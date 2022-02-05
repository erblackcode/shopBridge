import {Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { AddproductService } from '../productdetails/services/addproduct.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Productinterface } from '../productdetails/interface/productinterface';

@Component({
  selector: 'app-shop-bridge-dashboard',
  templateUrl: './shop-bridge-dashboard.component.html',
  styleUrls: ['./shop-bridge-dashboard.component.css']
})
export class ShopBridgeDashboardComponent implements OnInit {

  displayedColumns: string[] = ['ProductName', 'Category', 'Date', 'Price', 'Description', 'action'];
  dataSource!: MatTableDataSource<Productinterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private productApi: AddproductService){
  }

  ngOnInit(): void {
      this.getProductList();
  }

  openDialog() {
    this.dialog.open(ProductdetailsComponent, {
     width:"30%"
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getProductList();
      }
    })
  }

getProductList(){
  this.productApi.getProduct().subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      
    },
    error:(err)=>{
      alert("Error to get Product List");
    }
  })
}

editProduct(row: ProductdetailsComponent){
  this.dialog.open(ProductdetailsComponent, {
    width:"30%",
    data:row
  }).afterClosed().subscribe(val=>{
    if(val==='update'){
      this.getProductList();
    }
  })
}

deleteProduct(id:number){
    this.productApi.deleteProduct(id).subscribe({
      next:(res)=>{
        this.getProductList();
        alert("Product deleted successfuly");
      },
      error:(err)=>{
        alert("Error in Product Deletion");
      }
    })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
