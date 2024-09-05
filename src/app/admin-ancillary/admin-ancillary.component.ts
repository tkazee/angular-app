import { Component, OnInit } from '@angular/core';
import { DomElementSchemaRegistry } from '@angular/compiler';
 
  import{FormBuilder,FormGroup, Validators} from '@angular/forms'
  import { ApiService } from '../Shared/api.service';
import { adminAncillaryModel } from './admin-ancillary.model';

@Component({
  selector: 'app-admin-ancillary',
  templateUrl: './admin-ancillary.component.html',
  styleUrls: ['./admin-ancillary.component.css']
})
export class AdminAncillaryComponent implements OnInit {
  formValue !: FormGroup;
  adminModelObj : adminAncillaryModel = new adminAncillaryModel();
  cityData !: any;
  showAdd !: boolean;
  showUpdate !:boolean;
  
  
    constructor(private formbuilder : FormBuilder,private api : ApiService) { }
  public temp : any;
    ngOnInit(): void {
      this.formValue= this.formbuilder.group({
        CityName :['',[Validators.required]],
        Pizza:['',[Validators.required]],
      
        Rolls:['',[Validators.required]],
        Cakes:['',[Validators.required]],
        Shakes:['',[Validators.required]]
      })
      this.getAllFlights();
    }
    clickAddFlight()
    {
      this.formValue.reset();
     this.showAdd=true;
     this.showUpdate= false;
    }
    postFood()
    {
      this.adminModelObj.CityName = this.formValue.value.CityName;
      this.adminModelObj.Pizza = this.formValue.value.Pizza;
      this.adminModelObj.Rolls = this.formValue.value.Rolls;
      this.adminModelObj.Cakes = this.formValue.value.Cakes;
      this.adminModelObj.Shakes = this.formValue.value.Shakes;
      
  
  
      this.api.postFood(this.adminModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Food added successfully");
        
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
      this.api.getFood()
      .subscribe(res=>{
        this.cityData=res;
      })
    }
    deleteFlight(row :any)
    {
      this.api.deleteFood(row.id)
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
      this.formValue.controls['Pizza'].setValue(row.Pizza);
      this.formValue.controls['Rolls'].setValue(row.Rolls);
      this.formValue.controls['Cakes'].setValue(row.Cakes);
      this.formValue.controls['Shakes'].setValue(row.Shakes);
      
    }
  
    UpadateFood()
    {
      this.adminModelObj.CityName = this.formValue.value.CityName;
      this.adminModelObj.Pizza = this.formValue.value.Pizza;
      this.adminModelObj.Rolls = this.formValue.value.Rolls;
      this.adminModelObj.Cakes = this.formValue.value.Cakes;
      this.adminModelObj.Shakes = this.formValue.value.Shakes;
      this.api.updateFood(this.adminModelObj,this.temp)
      .subscribe(res=>{
        alert("Updated Successfully");
        this.formValue.reset();
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllFlights();
      })
    }
  }
  

