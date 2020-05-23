import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  rows : any;
  mydata : [];
  columns = [
    { prop:'id'},
    { prop: 'Plantype' },
    { name: 'Planlabel' },
    { name: 'Edit'}
   
    
  ]

  constructor(public router : Router,public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.main();
  }

  main()
  {
    this.myservice.getPlan().subscribe(response=>{
      console.log("main");
      console.log(response);
     this.rows = response;
    })
  }

  updateFilter(event)
  {

  }

  addnewplan()
  {
     this.router.navigate(['/component/addplan']);
  }

  editplan(id)
  {
    this.router.navigate(['/component/editplan',id]);
  }

}
