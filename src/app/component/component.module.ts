import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { OperatorComponent } from './operator/operator.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddoperatorComponent } from './addoperator/addoperator.component';
import { EditoperatorComponent } from './editoperator/editoperator.component';
import { PlanComponent } from './plan/plan.component';
import { AddplanComponent } from './addplan/addplan.component';
import { EditplanComponent } from './editplan/editplan.component';
import { DevicebrandComponent } from './devicebrand/devicebrand.component';
import { AdddevicebrandComponent } from './adddevicebrand/adddevicebrand.component';
import { EditdevicebrandComponent } from './editdevicebrand/editdevicebrand.component';
import { PlansmoduleComponent } from './plansmodule/plansmodule.component';
import { AddplansmoduleComponent } from './addplansmodule/addplansmodule.component';
import { EditplansmoduleComponent } from './editplansmodule/editplansmodule.component';
import { DevicecolorComponent } from './devicecolor/devicecolor.component';
import { AdddevicecolorComponent } from './adddevicecolor/adddevicecolor.component';
import { EditdevicecolorComponent } from './editdevicecolor/editdevicecolor.component';
import { PlanfiltersComponent } from './planfilters/planfilters.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    OperatorComponent,
    AddoperatorComponent,
    EditoperatorComponent,
    PlanComponent,
    AddplanComponent,
    EditplanComponent,
    DevicebrandComponent,
    AdddevicebrandComponent,
    EditdevicebrandComponent,
    PlansmoduleComponent,
    AddplansmoduleComponent,
    EditplansmoduleComponent,
    DevicecolorComponent,
    AdddevicecolorComponent,
    EditdevicecolorComponent,
    PlanfiltersComponent
  ]
})
export class ComponentsModule {}
