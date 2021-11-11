import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {


  constructor(private router:Router) { }
  age: any;
  showAge: any;
  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['details']);
  }


ageCalculator()
{
  if(this.age){
    const convertAge = new Date(this.age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
  }
}