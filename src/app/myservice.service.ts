import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  url = 'https://dev-api.aladdin.life/mlifesys/api/';
  
  constructor(private http:HttpClient) { }

  getOperator()
  {
    return this.http.get(this.url+'operators/1562833421056');
  }

  addOperator(value)
  {
    var data = {
      "authtoken" :"",
      "request": {
        "id":0,
        "operatorName" :value.operatorName,
        "isActive" : value.isActive,
        "supportRetail" : value.supportRetail,
        "supportOnline" : value.supportOnline,
        "logo" : value.logo
      }
    }
    
    console.log("servicewala data",value); 
    return this.http.post(this.url+'operators',data);
  }

  editOperator(id)
  { 
    console.log("myeditid");
    console.log(id);
    return this.http.get(this.url+'operators'+'/'+1562833421056+'/'+id);
  }

  updateOperator(value)
  {
    var data = {
      "authtoken" :"",
      "request": {
        "id":value.id,
        "operatorName" :value.operatorName,
        "isActive" : value.isActive,
        "supportRetail" : value.supportRetail,
        "supportOnline" : value.supportOnline,
        "logo" : value.logo
      }
    }

    return this.http.put(this.url+'operators',data);
  }

  getPlan()
  {
    return this.http.get(this.url+'plantypes/1562833421056');
  }

  addPlan(value)
  {
    var data = {
      "authtoken" :"",
      "request": {
        "id": 0,
        "planType": value.planType,
        "planLabel": value.planLabel,
        "active": value.active
      }
    }
    
    console.log("servicewala data",value); 
    return this.http.post(this.url+'plantypes',data);
  }

  editPlan(id)
  {
    return this.http.get(this.url+'plantypes'+'/'+1562833421056+'/'+id);
  }

  updatePlan(value)
  {
    console.log("mei service");
    console.log(value);
    var data = {
      "authtoken" :"",
      "request": {
        "id":value.id,
        "planType" :value.planType,
        "active" : value.active,
        "planLabel" : value.planLabel
      }
    }

    return this.http.put(this.url+'plantypes'+'/'+value.id,data);
  }

  getdeviceBrand()
  {
    return this.http.get(this.url+'devicebrand'+'/'+1562833421056);
  }

  adddeviceBrand(value)
  {
    var data = {
      "authtoken" :"",
      "request": {
            "id": 0,
            "deviceBrand": value.deviceBrand,
            "deviceType": value.deviceType,
            "isActive": value.isActive
      }
    }
    return this.http.post(this.url+'devicebrand',data);
  }

  editdeviceBrand(id)
  {
    console.log("id");
    console.log(id);
    return this.http.get(this.url+'devicebrand'+'/'+1562833421056+'/'+id);
  }

  updatedeviceBrand(value)
  {
    var data = {
      "authtoken": "",
      "request": {
          "id": value.id,
          "deviceBrand": value.deviceBrand,
          "deviceType": value.deviceType,
          "isActive": value.isActive
      }
   }
   
   return this.http.put(this.url+'devicebrand/',data);
  }

  getPlansModule()
  {
    return this.http.get(this.url+'plans'+'/'+1562833421056);
  }

  addplansModule(value)
  {
    var data = {
      "authtoken": "",
      "request": {
          "id": 0,
          "planId": value.planId,
          "planName": value.planName,
          "planLongName": value.planLongName,
          "recurringBbundle": null,
          "oneTimeAddon": null,
          "discountext": null,
          "planStartDate": value.planStartDate,
          "planEndDate": value.planEndDate,
          "planUrl":value.planUrl,
          "planValidity": value.planValidity,
          "planValidityUnit": value.planValidityUnit,
          "contractPeriod": value.contractPeriod,
          "priority": null,
          "contractPeriodUnit": value.contractPeriodUnit,
          "localExpat": value.localExpat,
          "autorenewedFlag": value.autorenewedFlag,
          "discountedUpfrontPayment": value.discountedUpfrontPayment,
          "planVatPer": value.planVatPer,
          "topupsallowedFlag": value.topupsallowedFlag,
          "numberOfMultiSims": value.numberOfMultiSims,
          "rechargeFrequency": value.rechargeFrequency,
          "rechargeFrequencyUnit": value.rechargeFrequencyUnit,
          "featured": 0,
          "planFeature": "",
          "planBucket": "",
          "planParent": "",
          "planStatus": "",
          "linkTopUp": " ",
          "subscriptionCode": " ",
          "planLayout": 0,
          "planType": value.planType,
          "operatorId": value.operatorId,
          "active": value.active,
          "addon": value.addon,
          "taxIncluded": value.taxIncluded,
          "dataOnly": value.dataOnly
      }
  }

  return this.http.post(this.url+'plans'+'/',data);
  }

  updateplansModule(value)
  {
    var data = {
      "authtoken": "",
      "request": {
          "id": 0,
          "planId": value.planId,
          "planName": value.planName,
          "planLongName": value.planLongName,
          "recurringBbundle": null,
          "oneTimeAddon": null,
          "discountext": null,
          "planStartDate": value.planStartDate,
          "planEndDate": value.planEndDate,
          "planUrl":value.planUrl,
          "planValidity": value.planValidity,
          "planValidityUnit": value.planValidityUnit,
          "contractPeriod": value.contractPeriod,
          "priority": null,
          "contractPeriodUnit": value.contractPeriodUnit,
          "localExpat": value.localExpat,
          "autorenewedFlag": value.autorenewedFlag,
          "discountedUpfrontPayment": value.discountedUpfrontPayment,
          "planVatPer": value.planVatPer,
          "topupsallowedFlag": value.topupsallowedFlag,
          "numberOfMultiSims": value.numberOfMultiSims,
          "rechargeFrequency": value.rechargeFrequency,
          "rechargeFrequencyUnit": value.rechargeFrequencyUnit,
          "featured": 0,
          "planFeature": "",
          "planBucket": "",
          "planParent": "",
          "planStatus": "",
          "linkTopUp": " ",
          "subscriptionCode": " ",
          "planLayout": 0,
          "planType": value.planType,
          "operatorId": value.operatorId,
          "active": value.active,
          "addon": value.addon,
          "taxIncluded": value.taxIncluded,
          "dataOnly": value.dataOnly
      }
  }
    return this.http.put(this.url+'plandata'+'/',data);
  }

  editplansModule(id)
  {
    // console.log(this.url+'plans'+'/'+1562833421056+'/'+id);
    return this.http.get(this.url+'plans'+'/'+1562833421056+'/'+id);
  }

  getdeviceColor()
  {
    return this.http.get(this.url+'devicecolor'+'/'+1562833421056);
  }

  adddeviceColor(value)
  {
    var data = {
      "authtoken": "",
      "request": {
          "id": 0,
          "deviceColor": value.deviceColor,
          "deviceColorHex": value.deviceColorHex,
          "isActive": value.isActive
      }
  }
    
    return this.http.post(this.url+'devicecolor'+'/',data);
  }

  editdeviceColor(id)
  {
    console.log("myid");
    console.log(id);
    return this.http.get(this.url+'devicecolor'+'/'+1562833421056+'/'+id);
  }

  updatedeviceColor(value)
  {
    var data = {
      "authtoken": "",
      "request": {
          "id":value.id,
          "deviceColor": value.deviceColor,
          "deviceColorHex": value.deviceColorHex,
          "isActive": value.isActive
      }
  }
    return this.http.put(this.url+'devicecolor'+'/',data);
  }

  getplanFilters()
  {
    return this.http.get(this.url+'filters'+'/'+1562833421056);
  }

}