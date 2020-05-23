import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup, FormArray } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdevicecolor',
  templateUrl: './editdevicecolor.component.html',
  styleUrls: ['./editdevicecolor.component.css']
})
export class EditdevicecolorComponent implements OnInit {

  colorform : FormGroup;
  public colorformid : number;
  public data : any;
  public deviceColor : any;
  public deviceColorHex : any;
  public isActive : any;

  constructor(public fb: FormBuilder,public myservice : MyserviceService, private activatedroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.main();
   

  }

  main()
  {
    this.colorform = this.fb.group({
      'deviceColor' : [''],
      'deviceColorHex'  : [''],
      'isActive'    : ['']
    });

    this.colorformid = this.activatedroute.snapshot.params['id'];
    console.log("id");
    console.log( this.colorformid);
    this.myservice.editdeviceColor(this.colorformid).subscribe(response=>{
      this.data = response;
      console.log('this.data');
      console.log(this.data);

      this.colorform.patchValue({
        deviceColor: this.data.deviceColor,
        deviceColorHex : this.data.deviceColorHex,
        isActive : this.data.isActive
      });
    });
  }

  onSubmit(value)
  {
    console.log("value");
    console.log(value);

    console.log(this.colorform.value);
 
       this.colorform.value.id = this.colorformid;
       this.myservice.updatedeviceColor(this.colorform.value).subscribe(data=>{
       console.log('data'+data);
       alert("updated successfully!")
       },
       error => {  
         alert(error);   
       });
  }

}
