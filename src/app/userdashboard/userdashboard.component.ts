import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../Shared/api.service';
import { userModel } from './userDashboardModel';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})

export class UserdashboardComponent implements OnInit {
  cityData !: any;
  loginData !:any;
  RegData !:any;
  selected : any;
  userModelObj : userModel = new userModel();
  constructor(private formbuilder : FormBuilder,private api : ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.api.getF()
    .subscribe(res=>{
      this.cityData=res;
    })
    this.api.getReg()
    .subscribe(res=>{
      this.RegData=res;
    })
    this.api.getLogin()
    .subscribe(res=>{
      this.loginData=res;
    })
  }

  getAllCities()
  {
    this.api.getF()
    .subscribe(res=>{
      this.cityData=res;
    })
  }
  bookFlight(Flight : any,city:any)
  {
    for(let i=0;i<this.RegData.length;i++)
    {
       if(this.RegData[i].email==this.loginData[this.loginData.length-1].email && this.RegData[i].password==this.loginData[this.loginData.length-1].password)
       {
        this.userModelObj.CustomerName = this.RegData[i].fullname;
        this.userModelObj.email=this.RegData[i].email;
        this.userModelObj.phone=this.RegData[i].mobile;
       }
    }
    this.userModelObj.CityName=city;
    this.userModelObj.HotelName=Flight;

    this.api.postFlightBookDetails(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Booked successfully");
    },err=>{
      alert("something went wrong");
    })
  }
}

