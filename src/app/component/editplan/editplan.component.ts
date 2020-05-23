import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editplan',
  templateUrl: './editplan.component.html',
  styleUrls: ['./editplan.component.css']
})
export class EditplanComponent implements OnInit {

  planform  : FormGroup;
  planType  : any;
  planLabel : any;
  planid    : number;
  data      : any;
  country = [{id : 1, name : 'India'},{id : 2, name : 'Bangladesh' },{id : 3, name: 'SriLanka'},{id : 4, name: 'Nepal'},]


  constructor(public fb : FormBuilder, public myservice : MyserviceService, private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.planform = this.fb.group({
      planType:[''],
      planLabel: [''],
      // country : [''],
      active : ['']
      
    });
    this.planid = this.activatedroute.snapshot.params['id'];
    this.myservice.editPlan(this.planid).subscribe(response=>{
      this.data = response;
      this.planform.patchValue({
      planType  : this.data.planType,
      planLabel : this.data.planLabel,
      active    : this.data.active
      // country   : "India"
   
      });
    });
    

  }

  onSubmit(value)
  {
    console.log("editplan");
    console.log(value);
    value.id = this.planid;
    this.myservice.updatePlan(value).subscribe(response=>{
      alert("updated");
    },
    error=>{
      alert(error);
    
    });
  }

  

}
