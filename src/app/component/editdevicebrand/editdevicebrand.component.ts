import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editdevicebrand',
  templateUrl: './editdevicebrand.component.html',
  styleUrls: ['./editdevicebrand.component.css']
})
export class EditdevicebrandComponent implements OnInit {

  public brandform        : FormGroup;
  public brandid          : number;
  public data             : any;
  public deviceBrand      : string;
  public deviceType       : string;
  public isActive         : boolean;

  constructor(private myservice      : MyserviceService, 
              private activatedroute : ActivatedRoute, 
              private fb             : FormBuilder,
              private router         : Router) { }

  ngOnInit(): void {
    this.main();
  }

  main()
  {
    this.brandform = this.fb.group({
     deviceBrand : [''],
     deviceType  : [''],
     isActive    : ['']
    });

    this.brandid = this.activatedroute.snapshot.params['id'];
    this.myservice.editdeviceBrand(this.brandid).subscribe(response=>{
    console.log("editresponse");
    console.log(response);
    this.data  = response;

      this.brandform.patchValue({
        deviceBrand: this.data.deviceBrand,
        deviceType: this.data.deviceType,
        isActive: this.data.isActive
      
        
       });  
    });
  }

  onSubmit(value)
  {
    console.log("update");
    console.log(value);
    value.id = this.brandid;
    this.myservice.updatedeviceBrand(value).subscribe(response=>{
      console.log(response);
      alert("upadted");
      this.router.navigate(['/component/devicebrand']);
    },
    error => {  
      alert(error);  
    });
  }

  

}
