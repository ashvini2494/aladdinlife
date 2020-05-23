import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-devicebrand',
  templateUrl: './devicebrand.component.html',
  styleUrls: ['./devicebrand.component.css']
})
export class DevicebrandComponent implements OnInit {

  mydata = [];
  rows : any;
  columns = [
    { prop:'id'},
    { prop: 'DeviceBrand' },
    { name: 'DeviceType' },
    { name: 'Active'},
    // { name: 'Supportonline' },
    { name: 'Edit'}
   
  ]

  constructor(public router : Router, public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.main();
  }

  main()
  {
    this.myservice.getdeviceBrand().subscribe(response=>{
      console.log("main");
      console.log(response);
     this.rows = response;
    })
  }

  updateFilter(event)
  {

  }

  adddevice()
 {
   
   this.router.navigate(['/component/adddevicebrand']);
 }

 editbrand(id)
 {
   console.log("id");
   this.router.navigate(['/component/editdevicebrand', id]);

 }

}
