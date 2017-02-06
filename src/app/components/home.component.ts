import { Component,OnInit } from '@angular/core';

import { Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'hospitallist',
   
  template: `
  
              <div class="autocomplete">
                  <select name="hospitallist" class="autocomplete" [(ngModel)]="hospitalid" (change)="loadhospitaldomain($event.target.value)" autocomplete="off">
                       <option value=""> Please Select Hospital</option>    
                       <option *ngFor="let place of hospitallist" value="{{place.id}}">
                       
                          {{place.id}}
                    </option> 
                  </select>
                  <select name="hospitaldomain" class="autocomplete" autocomplete="off">
                       <option value=""> Please Select Hospital Domain</option>    
                       <option *ngFor="let place of hospitaldomain">
                       
                          {{place.id}}
                    </option> 
                  </select>

              </div>    
  `
})
export class HomeComponent implements OnInit {
      public hospitallist:any[];
       public hospitaldomain:any[];
  
  constructor(public http: Http) {}
  ngOnInit() {
            
        this.loadHospital();
    }
    loadHospital(){
             this.http.get('data/list.json').map((res: any) => res.json())
			.subscribe(
				(res: any) => {
				      console.log(res,"res");
					
					this.hospitallist=res.hospital;
				});

    }
    loadhospitaldomain(hospitalid:string){
         var items: any[] = [];
		  for(var i = 0; i < this.hospitallist.length; i++){
		      if(this.hospitallist[i].id== hospitalid){

		          items=this.hospitallist[i].domain;
		          break;
		      }
		  }
		  
		  this.hospitaldomain=items;
		
    }
  
 
}
