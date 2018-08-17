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
  public list:any=[];
  public AllItem:any=[];
  

  constructor() { }
   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
getLaptop()
{
  this.laptopArray=
  [
    {name:'HP 15q',price:' 28990'},
    {name:'Dell Inspiron 15',price:' 37990'},
    {name:'Lenovo Ideapad 330',price:' 41990'},
    {name:'Apple Macbook Air',price:' 61990'},
    {name:'Microsoft Surface Pro',price:' 76990'},
    {name:'Acer Predator Helios',price:' 89990'},
    {name:'Asus TUF',price:' 69990'},
    {name:'MSI GL Series',price:' 64990'},
    {name:'i-Life ZED Series',price:' 10990'}
  ]
  //this.list.push(this.laptopArray);
  this.closeNav(); 
  console.log(this.laptopArray); 
}
getMobile()
{
  this.mobileArray=
  [
    {name:'Redmi Note 5 Pro',price:' 14999'},
    {name:'Samsung Galaxy On8',price:' 16990'},
    {name:'Apple iPhone 8 Plus',price:' 73999'},
    {name:'Honor 7A',price:' 8999'},
    {name:'Moto G6 Play',price:' 11999'},
    {name:'Oppo A71',price:'9990'},
    {name:'Vivo Y81',price:' 12990'},
    {name:'Infinix Smart 2',price:' 5999'},
    {name:'Asus Zenfone Max Pro M1',price:' 12999'}
  ]
  //this.list.push(this.mobileArray);
  this.closeNav();
  console.log(this.mobileArray);
  
}
getTv()
{
  this.tvArray=
  [
    {name:'Mi LED Smart TV 4A',price:' 22999'},
    {name:'Vu HD Ready LED TV',price:' 11999'},
    {name:'iFFALCON K2A Ultra HD',price:' 45999'},
    {name:'Thomson LED Smart TV B9 Pro',price:' 13499'},
    {name:'MarQ Innoview',price:' 10999'},
    {name:'Samsung HD Ready LED TV',price:'Rs. 16999'},
    {name:'LG Smart',price:' 22999'},
    {name:'Sony HD Ready LED TV',price:' 19499'},
    {name:'Onida Live Genius 2',price:' 28999'},
  ]
  //this.list.push(this.tvArray);
  this.closeNav();
  console.log(this.tvArray);
}
getTablet()
{
  this.tabArray=
  [
    {name:'Apple iPad(6th Gen)',price:' 27900'},
    {name:'Samsung Galaxy Tab A',price:' 29990'},
    {name:'Lenovo Yoga 3',price:' 14990'},
    {name:'Alcatel Pop 4',price:' 11999'},
    {name:'Honor MediaPad T3',price:' 13999'},
    {name:'Mi LED Smart TV 4A',price:' 22999'},
    {name:'Mi LED Smart TV 4A',price:' 22999'},
    {name:'Mi LED Smart TV 4A',price:' 22999'},
    {name:'Mi LED Smart TV 4A',price:' 22999'},
  ]
  //this.list.push(this.tabArray);
  this.closeNav();
  console.log(this.tabArray);
}
getWatch()
{
  this.watchArray=
  [
    {name:'Apple Watch Series 3',price:'31900'},
    {name:'Fossil Gen 3 Q',price:'21995'},
    {name:'Fitbit Charge 2 Large',price:'14851'},
    {name:'Mi Band 2',price:'1799'},
    {name:'Garmin Fenix 5s',price:'50990'},
    {name:'Lenovo HW01',price:'1599'},
  ]
  //this.list.push(this.watchArray);
  this.closeNav();
  console.log(this.watchArray);
}
getAllItem()
{
  this.AllItem=[this.laptopArray,this.mobileArray,this.tvArray,this.tabArray,this.watchArray];
  this.closeNav();
  console.log(this.AllItem);
}




  ngOnInit() {
  }

}
