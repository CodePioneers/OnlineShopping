import { Component, OnInit } from '@angular/core';

export class Product{
  constructor(public name:String,public price:String){}


}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {
products:Product[]




  constructor() { }

  ngOnInit() {
  }

}
