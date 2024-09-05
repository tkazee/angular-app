import { Component, OnInit } from '@angular/core';
import{Router } from '@angular/router'
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    let self=this;
    setTimeout(function(){
      self.router.navigateByUrl('/home')
    },3000)
  }


}
