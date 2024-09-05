import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postF(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postFood(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts1",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getF()
  {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  getFood()
  {
    return this.http.get<any>("http://localhost:3000/posts1")
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deletecity(data : number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  deleteFood(data : number)
  {
    return this.http.delete<any>("http://localhost:3000/posts1/"+data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  updateCity(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateFood(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts1/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  postFlightBookDetails(data : any)
  {
    return this.http.post<any>("http://localhost:3000/BookedFlights",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postFoodDetails(data : any)
  {
    return this.http.post<any>("http://localhost:3000/BookedFood",data)
    .pipe(map((res:any)=>{
      return res;
    }))
    
  }
  postLogin(data : any)
  {
    return this.http.post<any>("http://localhost:3000/login",data)
    .pipe(map((res:any)=>{
      return res;
  }))
}
getReg()
{
  return this.http.get<any>("http://localhost:3000/signupUsers")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getLogin()
{
  return this.http.get<any>("http://localhost:3000/login")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getBookedHotel()
{
  return this.http.get<any>("http://localhost:3000/BookedFlights")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getBookedFood()
{
  return this.http.get<any>("http://localhost:3000/BookedFood")
    .pipe(map((res:any)=>{
      return res;
    }))
}
}