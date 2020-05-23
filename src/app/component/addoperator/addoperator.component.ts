import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addoperator',
  templateUrl: './addoperator.component.html',
  styleUrls: ['./addoperator.component.css']
})
export class AddoperatorComponent implements OnInit {

basicform: FormGroup;
selectedfile: '';
manyselectedfile: [];
urls = new Array<string>();
//target:[];
mydata=<any>[];
imageUrl = '';
submitted = false;
formData = <any>[];
allimages: string[] = [];

  constructor(public fb: FormBuilder,public myservice : MyserviceService,public router : Router) { }

  ngOnInit(): void {
    this.basicform = this.fb.group({
      operatorName:[''],
      logo: [''],
      supportRetail : [''],
      supportOnline : [''],
      isActive : ['']
    });


  }

  onSubmit(value)
  {
    console.log("value");
    console.log(value);

    console.log(this.basicform.value);
 
       this.myservice.addOperator(this.basicform.value).subscribe(data=>{
       console.log('data'+data);
       alert("added successfully!");
       this.router.navigate(['/component/operator']);
       },
       error => {  
         alert(error);   
       });

  }

}
