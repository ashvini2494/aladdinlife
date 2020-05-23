import { Component, OnInit } from '@angular/core';
// import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  mydata = [];
  rows : any;

  // rows = [];

  // rows = [
  //   { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' }
  // ];
  // columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  columns = [
    { prop:'id'},
    { prop: 'Operatorname' },
    { name: 'Supportretail' },
    { name: 'Supportonline' },
    { name: 'Active'},
    { name: 'Edit'},
    { name:'Delete'}
  ]



  constructor(public router : Router, public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.main()
    // this.fetch((data) => {
    //   this.rows = data;
    // });
  }

  main()
  {
    this.myservice.getOperator().subscribe(response=>{
      console.log("main");
      console.log(response);
     this.rows = response;
    })
  }

  updateFilter(event)
  {

  }


  //fetch(cb) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    // req.onload = () => {
    //   const data = JSON.parse(req.response);
    //   cb(data);
    // };

    // req.send();
   
 // }

 addnewoperator()
 {
   
   this.router.navigate(['/component/addoperator']);
 }

 editproduct(id)
 {
   console.log("id");
   this.router.navigate(['/component/editoperator', id]);

 }

}
