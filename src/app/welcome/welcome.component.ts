import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, Product } from '../service/data/welcome-data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ProductDataService } from '../service/data/product-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  private username:String
 products:Product[];
 

 

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['name']
    //this.service.retriveProducts().subscribe(Response=>console.log(Response));
    
  }

  handlewelcome(){
    console.log("handle welcome called");
    
    this.service.retriveProducts().subscribe(Response=>this.successfulresponse(Response));
  console.log("productdetails");
      
    
  }

  successfulresponse(response){
console.log("webservice details:");
    console.log(this.products=response);
  }
  

 

}


