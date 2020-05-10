import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private username:String
  private namefromresponse:String;
  private pwdmessagefromresponse:String;

  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['name']
  }

  handlewelcome(){
    console.log("handle welcome called");
    //console.log(this.service.getDetailsService());
    this.service.getDetailsService().subscribe(Response=>Response,error=>"error occurred");
  
      //this.handlesuccessfullresponse(Response));
    
  }
  
//handlesuccessfullresponse(response){
 // console.log(this.namefromresponse=response.name);
 

}

}
