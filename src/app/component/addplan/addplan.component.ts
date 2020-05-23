import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-addplan',
  templateUrl: './addplan.component.html',
  styleUrls: ['./addplan.component.css']
})
export class AddplanComponent implements OnInit {

  country = [{id : 1, name : 'India'},{id : 2, name : 'Bangladesh' },{id : 3, name: 'SriLanka'},{id : 4, name: 'Nepal'},]
  planform : FormGroup;
  
  constructor(public fb : FormBuilder, public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.planform = this.fb.group({
      planType:[''],
      planLabel: [''],
      // country : [''],
      active : ['']
      
    });
  }

  onSubmit(value)
  {
    console.log("value");
    console.log(value);

    console.log(this.planform.value);
 
       this.myservice.addPlan(this.planform.value).subscribe(data=>{
       console.log('data'+data);
       alert("added successfully!")
       },
       error => {  
         alert(error);   
       });

  }

}
