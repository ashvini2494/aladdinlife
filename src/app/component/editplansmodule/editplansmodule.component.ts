import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editplansmodule',
  templateUrl: './editplansmodule.component.html',
  styleUrls: ['./editplansmodule.component.css']
})
export class EditplansmoduleComponent implements OnInit {

  autorenewedFlagAll = [{id: 0 , name : 'Onetime'},{id: 1 , name : 'Recurring'},{id: 2 , name : 'Both'},{id: 3 , name : 'International'}]
  plansmoduleform : FormGroup;
  data : any;
  planTypeAll : any;
  operatorAll : any;
  planId: any;
  planType:any;
  operatorId: any;
  planName : any;
  planLongName :any;
  planStartDate:any;
  planEndDate:any;
  planUrl : any;
  planValidity : any;
  planValidityUnit : any;
  contractPeriod :any;
  contractPeriodUnit : any;
  autorenewedFlag :any;
  discountedUpfrontPayment : any;
  planVatPer : any;
  topupsallowedFlag : any;
  numberOfMultiSims : any;
  rechargeFrequency : any;
  rechargeFrequencyUnit : any;
  active : any;
  addon : any;
  taxIncluded :any;
  dataOnly : any;
  plansmoduleid : any;

  constructor(public fb : FormBuilder, 
              public myservice : MyserviceService, 
              private activatedroute : ActivatedRoute,
              public router : Router) { }

  ngOnInit(): void {
    this.plansmoduleform = this.fb.group({
      planId: [''],
      planType:[''],
      operatorId: [''],
      planName : [''],
      planLongName : [''],
      planStartDate:[''],
      planEndDate:[''],
      planUrl : [''],
      planValidity : [''],
      planValidityUnit : [''],
      contractPeriod :[''],
      contractPeriodUnit : [''],
      autorenewedFlag : [''],
      discountedUpfrontPayment : [''],
      planVatPer : [''],
      topupsallowedFlag : [''],
      numberOfMultiSims : [''],
      rechargeFrequency : [''],
      rechargeFrequencyUnit : [''],
      active : [''],
      addon : [''],
      taxIncluded : [''],
      dataOnly : ['']
      
    });
    this.plansmoduleid = this.activatedroute.snapshot.params['id'];
    this.myservice.getPlan().subscribe(responsedata=>{
      this.planTypeAll = responsedata; 
      });
    this.myservice.getOperator().subscribe(responsedata=>{
        this.operatorAll = responsedata; 
      });
    this.myservice.editplansModule(this.plansmoduleid).subscribe(myresponse=>{
      console.log("id");
      console.log(this.plansmoduleid);
      this.data = myresponse;
      console.log("myresponse");
      console.log(myresponse);
      this.plansmoduleform.patchValue({
        planId: this.data.planId,
        planType:this.data.planType,
        operatorId: this.data.operatorId,
        planName : this.data.planName,
        planLongName : this.data.planLongName,
        planStartDate:this.data.planStartDate,
        planEndDate:this.data.planEndDate,
        planUrl : this.data.planUrl,
        planValidity : this.data.planValidity,
        planValidityUnit : this.data.planValidityUnit,
        contractPeriod :this.data.contractPeriod,
        contractPeriodUnit : this.data.contractPeriodUnit,
        autorenewedFlag : this.data.autorenewedFlag,
        discountedUpfrontPayment : this.data.discountedUpfrontPayment,
        planVatPer : this.data.planVatPer,
        topupsallowedFlag : this.data.topupsallowedFlag,
        numberOfMultiSims : this.data.numberOfMultiSims,
        rechargeFrequency : this.data.rechargeFrequency,
        rechargeFrequencyUnit : this.data.rechargeFrequencyUnit,
        active : this.data.active,
        addon : this.data.addon,
        taxIncluded : this.data.taxIncluded,
        dataOnly : this.data.dataOnly
     
        });  
    })   
  }

  onSubmit(value)
  {
    console.log("submit");
    console.log(value);
    // this.myservice.addplansModule(this.plansmoduleform.value).subscribe(data=>{
    //   console.log('data'+data);
    //   alert("added successfully!")
    //   },
    //   error => {  
    //     alert(error);   
    //   });
  }

}
