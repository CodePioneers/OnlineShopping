import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  private username:String
 

 

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['name']
  }

  handlewelcome(){
    console.log("handle welcome called");
    
    this.service.getDetailsService().subscribe(Response=>console.log(Response));
  console.log("pwdmessagefromresponse");
      
    
  }
  

 

}


