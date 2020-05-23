import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-devicecolor',
  templateUrl: './devicecolor.component.html',
  styleUrls: ['./devicecolor.component.css']
})
export class DevicecolorComponent implements OnInit {


  mydata = [];
  rows : any;
  columns = [
    { prop:'id'},
    { prop: 'DeviceColor' },
    { name: 'DeviceColorHex' },
    { name: 'Active' },
    // { name: 'Supportonline' },
    { name: 'Edit'}
   
  ]

  constructor(public router : Router, public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.main();
  }

  
  main()
  {
    this.myservice.getdeviceColor().subscribe(response=>{
      console.log("main");
      console.log(response);
     this.rows = response;
    })
  }

  updateFilter(event)
  {

  }

  adddevicecolor()
 {
   
   this.router.navigate(['/component/adddevicecolor']);
 }

 editcolor(id)
 {
   console.log("id");
   this.router.navigate(['/component/editdevicecolor', id]);

 }

}
