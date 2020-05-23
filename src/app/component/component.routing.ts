import { Routes } from '@angular/router';

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
import { OperatorComponent } from './operator/operator.component';
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

export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent,
				data: {
					title: 'Progressbar'
				}
			},
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards'
				}
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent,
				data: {
					title: 'Pagination'
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Accordion'
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert'
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel'
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown'
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal'
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip'
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating'
				}
			},
			{
				path: 'tabs',
				component: NgbdtabsBasicComponent,
				data: {
					title: 'Tabs'
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker'
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
			},
			{
				path: 'operator',
				component: OperatorComponent,
				data: {
					title: 'Operator',
				}
			},

			{
				path: 'addoperator',
				component: AddoperatorComponent,
				data: {
					title: 'AddOperator',
				}
			},
			{
				path: 'editoperator/:id',
				component: EditoperatorComponent,
				data: {
					title: 'EditOperator',
				}
			},
			{
				path: 'plan',
				component: PlanComponent,
				data: {
					title: 'Plan',
				}	
			},
			{
				path: 'addplan',
				component: AddplanComponent,
				data: {
					title: 'AddPlan',
				}
			},
			{
				path: 'editplan/:id',
				component: EditplanComponent,
				data: {
					title: 'Editplan',
				}
			},
			{
				path: 'devicebrand',
				component: DevicebrandComponent,
				data: {
					title: 'Devicebrand',
				}
			},
			{
				path: 'adddevicebrand',
				component: AdddevicebrandComponent,
				data: {
					title: 'AddDevicebrand',
				}
			},
			{
				path: 'editdevicebrand/:id',
				component: EditdevicebrandComponent,
				data: {
					title: 'EditDeviceBrand',
				}
			},
			{
				path: 'plansmodule',
				component: PlansmoduleComponent,
				data: {
					title: 'Plansmodule',
				}
			},
			{
				path: 'addplansmodule',
				component: AddplansmoduleComponent,
				data: {
					title: 'AddPlansmodule',
				}
			},
			{
				path: 'editplansmodule/:id',
				component: EditplansmoduleComponent,
				data: {
					title: 'Editplansmodule'
				}
			},
			{
				path: 'devicecolor',
				component: DevicecolorComponent,
				data: {
					title: 'DeviceColor'
				}
			},
			{
				path: 'adddevicecolor',
				component: AdddevicecolorComponent,
				data: {
					title: 'AdddeviceColor'
				}
			},
			{
				path: 'editdevicecolor/:id',
				component: EditdevicecolorComponent,
				data: {
					title: 'Editdevicecolor'
				}
			},
			{
				path: 'planfilters',
				component: PlanfiltersComponent,
				data: {
					title: 'Planfilters'
				}
			}

		]
	}
];
