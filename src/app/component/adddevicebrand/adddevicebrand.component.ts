import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-adddevicebrand',
  templateUrl: './adddevicebrand.component.html',
  styleUrls: ['./adddevicebrand.component.css']
})
export class AdddevicebrandComponent implements OnInit {

  brandform : FormGroup;

  constructor(public fb: FormBuilder,public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.brandform = this.fb.group({
      deviceBrand : [''],
      deviceType  : [''],
      isActive    : ['']
    }); 
  }

  onSubmit(value)
  {
    console.log("value");
    console.log(value);

    console.log(this.brandform.value);
 
       this.myservice.adddeviceBrand(this.brandform.value).subscribe(data=>{
       console.log('data'+data);
       alert("added successfully!")
       },
       error => {  
         alert(error);   
       });
  }

}
