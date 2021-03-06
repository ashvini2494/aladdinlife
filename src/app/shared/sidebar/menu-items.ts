import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'UI Components',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  // {
  //   path: '/component/accordion',
  //   title: 'Accordion',
  //   icon: 'mdi mdi-equal',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/alert',
  //   title: 'Alert',
  //   icon: 'mdi mdi-message-bulleted',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/carousel',
  //   title: 'Carousel',
  //   icon: 'mdi mdi-view-carousel',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/dropdown',
  //   title: 'Dropdown',
  //   icon: 'mdi mdi-calendar-clock',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/modal',
  //   title: 'Modal',
  //   icon: 'mdi mdi-tablet',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'mdi mdi-backburger',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/poptool',
  //   title: 'Popover & Tooltip',
  //   icon: 'mdi mdi-image-filter-vintage',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/progressbar',
  //   title: 'Progressbar',
  //   icon: 'mdi mdi-poll',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/rating',
  //   title: 'Ratings',
  //   icon: 'mdi mdi-bandcamp',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/tabs',
  //   title: 'Tabs',
  //   icon: 'mdi mdi-sort-variant',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/timepicker',
  //   title: 'Timepicker',
  //   icon: 'mdi mdi-calendar-clock',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/toast',
  //   title: 'Toast',
  //   icon: 'mdi mdi-alert',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  {
    path: '/component/operator',
    title: 'Operator',
    icon: 'mdi mdi-poll',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/plan',
    title: 'Plan',
    icon: 'mdi mdi-stackoverflow',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/devicebrand',
    title: 'DeviceBrand',
    icon: 'mdi mdi-apple',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/devicecolor',
    title: 'DeviceColor',
    icon: 'mdi mdi-checkerboard',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/planfilters',
    title: 'Planfilters',
    icon: 'mdi mdi-arrange-send-backward',
    class: '',
    extralink: false,
    submenu: []
  },
 
  {
    path: '/component/plansmodule',
    title: 'PlansModule',
    icon: 'mdi mdi-newspaper',
    class: '',
    extralink: false,
    submenu: []
  }

];
