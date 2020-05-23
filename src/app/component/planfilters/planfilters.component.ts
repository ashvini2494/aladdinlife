import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service'; 

@Component({
  selector: 'app-planfilters',
  templateUrl: './planfilters.component.html',
  styleUrls: ['./planfilters.component.css']
})
export class PlanfiltersComponent implements OnInit {


  mydata = [];
  rows : any;
  columns = [
    { prop:'id'},
    { prop: 'KeyMajor' },
    { name: 'KeyName' },
    { name: 'keyNameLabel'},
    { name: 'IconsClass'},
    { name: 'KeyValueMin'},
    { name: 'KeyUnitsMin'},
    { name: 'KeyValueMax'},
    { name: 'KeyUnitsMax'},
    { name: 'ReturnType'},
    { name: 'Label'},
    { name: 'Country'},
    { name: 'Language'},
    { name: 'Orderno'},
    { name: 'PlanType'},
    { name: 'Addon'},
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
    this.myservice.getplanFilters().subscribe(response=>{
      console.log("main");
      console.log(response);
     this.rows = response;
    })
  }

  updateFilter(event)
  {

  }



  addplanfilters()
  {
    // this.router.navigate(['/component/addplanfilters']);
  }
  editfilters(id)
  {
  //   console.log("id");
  //  this.router.navigate(['/component/editplanfilters', id]);
  }

}
