import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editoperator',
  templateUrl: './editoperator.component.html',
  styleUrls: ['./editoperator.component.css']
})
export class EditoperatorComponent implements OnInit {

  public basicform    : FormGroup;
  public opid         : number;
  public data         : any;
  public logo         : any;
  public operatorName : any;

  constructor(private myservice : MyserviceService, 
             private activatedroute : ActivatedRoute, 
             private fb : FormBuilder,
             private router : Router ) { }

  ngOnInit(): void {
    this.main();
  }

  main()
  {

    this.basicform = this.fb.group({
      'operatorName' : [''],
      'logo' : [''],
      'supportRetail' : [''],
      'supportOnline' :[''],
      'isActive' : ['']
  
    });

    this.opid = this.activatedroute.snapshot.params['id'];
    this.myservice.editOperator(this.opid).subscribe(response=>{
      console.log("editresponse");
      console.log(response);
      this.data  = response;

      this.basicform.patchValue({
        operatorName: this.data.operatorName,
        logo: this.data.logo,
        supportRetail: this.data.supportRetail,
        supportOnline: this.data.supportOnline,
        isActive: this.data.isActive
      
        
       }); 
      

     
      
    });
  }
  
  onSubmit(value)
  {
    console.log("update");
    console.log(value);
    value.id = this.opid;
    this.myservice.updateOperator(value).subscribe(response=>{
      console.log(response);
      alert("upadted");
      this.router.navigate(['/component/operator']);
    },
    error => {  
      alert(error);  
    });
  }

}
