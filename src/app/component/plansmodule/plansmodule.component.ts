import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-plansmodule',
  templateUrl: './plansmodule.component.html',
  styleUrls: ['./plansmodule.component.css']
})
export class PlansmoduleComponent implements OnInit {

  mydata : any = [] ;
  rows : any;
  rows1 : any;
  rechargeFrequency1 : any;
  plantype : any;
  operatorname : any;

  columns = [
    { prop:'id'},
    { prop: 'planId' },
    { name: 'planName' },
    // { name: 'planLongName' },
    { name:'planStartDate'},
    { name:'planEndDate'},
    { name:'planValidity'},
    // { name:'planValidityUnit'},
    // { name:'contractPeriod'},
    // { name:'contractPeriodUnit'},
    // { name:'localExpat'},
    // { name:'autorenewedFlag'},
    // { name:'discountedUpfrontPayment'},
    // { name:'planVatPer'},
    // { name:'numberOfMultiSims'},
    { name:'rechargeFrequency'},
    { name:'planType'},
    { name:'operatorId'},
    { name:'active'},
    { name:'addon'},
    { name:'taxIncluded'},
    { name:'dataOnly'},
    { name:'Active'},
    { name: 'Edit'}
    
  ]

  constructor(public router : Router, public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.main();
  }

 main()
 {
  this.myservice.getPlansModule().subscribe(response=>{
    console.log("main");
    console.log(response);
    this.mydata = response;
    this.mydata.forEach(element => {
      this.rechargeFrequency1 =  element.rechargeFrequency + " "+  element.rechargeFrequencyUnit ;
      element.rechargeFrequency = this.rechargeFrequency1; 

      this.myservice.editPlan(element.planType).subscribe(planresponse=>{
      this.plantype = planresponse['planType'];
      element.planType = this.plantype;
      });

      this.myservice.editOperator(element.operatorId).subscribe(operatorresponse=>{
        this.operatorname = operatorresponse['operatorName'];
        element.operatorId = this.operatorname;
        })
    });
    this.rows = this.mydata;
  });
 }

 updateFilter(event)
  {

  }

  addplansmodule()
  {
    this.router.navigate(['/component/addplansmodule']);
  }

  editplans(id)
  {
    this.router.navigate(['/component/editplansmodule',id]);
  }

}
