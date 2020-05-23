import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-addplansmodule',
  templateUrl: './addplansmodule.component.html',
  styleUrls: ['./addplansmodule.component.css']
})
export class AddplansmoduleComponent implements OnInit {

  autorenewedFlagAll = [{id: 0 , name : 'Onetime'},{id: 1 , name : 'Recurring'},{id: 2 , name : 'Both'},{id: 3 , name : 'International'}]
  plansmoduleform : FormGroup;
  planTypeAll : any;
  operatorAll : any;

  constructor(public fb : FormBuilder, public myservice : MyserviceService) { }

  

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

    this.myservice.getPlan().subscribe(data=>{
      this.planTypeAll = data; 
      });

      this.myservice.getOperator().subscribe(data=>{
        this.operatorAll = data; 
        });
  }

  onSubmit(value)
  {
    console.log("submit");
    console.log(value);
    this.myservice.addplansModule(this.plansmoduleform.value).subscribe(data=>{
      console.log('data'+data);
      alert("added successfully!")
      },
      error => {  
        alert(error);   
      });
  }



}
