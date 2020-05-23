import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-adddevicecolor',
  templateUrl: './adddevicecolor.component.html',
  styleUrls: ['./adddevicecolor.component.css']
})
export class AdddevicecolorComponent implements OnInit {

  colorform : FormGroup;

  constructor(public fb: FormBuilder,public myservice : MyserviceService) { }

  ngOnInit(): void {
    this.colorform = this.fb.group({
      deviceColor : [''],
      deviceColorHex  : [''],
      isActive    : ['']
    });
  }

  onSubmit(value)
  {
    console.log("value");
    console.log(value);

    console.log(this.colorform.value);
 
       this.myservice.adddeviceColor(this.colorform.value).subscribe(data=>{
       console.log('data'+data);
       alert("added successfully!")
       },
       error => {  
         alert(error);   
       });
  }

}
