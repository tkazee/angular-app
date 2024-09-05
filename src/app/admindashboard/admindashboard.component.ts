import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ApiService } from '../Shared/api.service';
import { adminModel } from './admin-dash board model';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
   formValue !: FormGroup;
   adminModelObj : adminModel = new adminModel();
   cityData !: any;
   showAdd !: boolean;
   showUpdate !:boolean;
  constructor(private formbuilder : FormBuilder,private api : ApiService) { }
public temp : any;
  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
      CityName :['',[Validators.required]],
      Flight1:['',[Validators.required]],
      //Hote12:[''],
      Flight2:['',[Validators.required]],
      Flight3:['',[Validators.required]],
      Flight4:['',[Validators.required]]
    })
    this.getAllFlights();
  }
  clickAddFlight()
  {
    this.formValue.reset();
   this.showAdd=true;
   this.showUpdate= false;
  }
  postFlight()
  {
    this.adminModelObj.CityName = this.formValue.value.CityName;
    this.adminModelObj.Flight1 = this.formValue.value.Flight1;
    this.adminModelObj.Flight2 = this.formValue.value.Flight2;
    this.adminModelObj.Flight3 = this.formValue.value.Flight3;
    this.adminModelObj.Flight4 = this.formValue.value.Flight4;
    


    this.api.postF(this.adminModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Flights added successfully");
      
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllFlights();
    },
    err=>{
      alert("something went wrong");
    })
  }
  getAllFlights()
  {
    this.api.getF()
    .subscribe(res=>{
      this.cityData=res;
    })
  }
  deleteFlight(row :any)
  {
    this.api.deletecity(row.id)
    .subscribe(res=>{
      alert("City Deleted")
      this.getAllFlights();
    })
  }
  onEdit(row :any)
  {
    this.showAdd=false;
    this.showUpdate= true;
   this.temp=row.id;
    this.formValue.controls['CityName'].setValue(row.CityName);
    this.formValue.controls['Flight1'].setValue(row.Flight1);
    this.formValue.controls['Flight2'].setValue(row.Flight2);
    this.formValue.controls['Flight3'].setValue(row.Flight3);
    this.formValue.controls['Flight4'].setValue(row.Flight4);
    
  }

  UpadateFlight()
  {
    this.adminModelObj.CityName = this.formValue.value.CityName;
    this.adminModelObj.Flight1 = this.formValue.value.Flight1;
    this.adminModelObj.Flight2 = this.formValue.value.Flight2;
    this.adminModelObj.Flight3 = this.formValue.value.Flight3;
    this.adminModelObj.Flight4 = this.formValue.value.Flight4;
    this.api.updateCity(this.adminModelObj,this.temp)
    .subscribe(res=>{
      alert("Updated Successfully");
      this.formValue.reset();
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllFlights();
    })
  }
}
