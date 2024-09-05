import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {
bookedHotel: any;
  constructor(private api : ApiService,private http:HttpClient) {
    this.api.getBookedHotel()
    .subscribe(res=>{
      this.bookedHotel=res;
    })
   }

  ngOnInit(): void {
  }

}
