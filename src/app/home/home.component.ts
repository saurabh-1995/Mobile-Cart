import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public laptopArray:any=[];
  public mobileArray:any=[];
  public tvArray:any=[];
  public tabArray:any=[];
  public watchArray:any=[];
  public name:string="";
  public price:number;
  public category:string="";

  constructor() { }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
callLaptop()
{
  this.laptopArray=
  [
    {name:'HP 15q',price:'Rs. 28990',category:'Laptop'},
    {name:'Dell Inspiron 15',price:'Rs. 37990',category:'Laptop'},
    {name:'Lenovo Ideapad 330',price:'Rs. 41990',category:'Laptop'},
    {name:'Apple Macbook Air',price:'Rs. 61990',category:'Laptop'},
    {name:'Microsoft Surface Pro',price:'Rs. 76990',category:'Laptop'},
    {name:'Acer Predator Helios',price:'Rs. 89990',category:'Laptop'},
    {name:'Asus TUF',price:'Rs. 69990',category:'Laptop'},
    {name:'MSI GL Series',price:'Rs. 64990',category:'Laptop'},
    {name:'i-Life ZED Series',price:'Rs. 10990',category:'Laptop'}
  ]  
}
callMobile()
{
  this.mobileArray=
  [
    {name:'Redmi Note 5 Pro',price:'Rs. 14999',category:'Mobile'},
    {name:'Samsung Galaxy On8',price:'Rs. 16990',category:'Mobile'},
    {name:'Apple iPhone 8 Plus',price:'Rs. 73999',category:'Mobile'},
    {name:'Honor 7A',price:'Rs. 8999',category:'Mobile'},
    {name:'Moto G6 Play',price:'Rs. 11999',category:'Mobile'},
    {name:'Oppo A71',price:'Rs. 9990',category:'Mobile'},
    {name:'Vivo Y81',price:'Rs. 12990',category:'Mobile'},
    {name:'Infinix Smart 2',price:'Rs. 5999',category:'Mobile'},
    {name:'Asus Zenfone Max Pro M1',price:'Rs. 12999',category:'Mobile'}
  ]
}


  ngOnInit() {
  }

}
