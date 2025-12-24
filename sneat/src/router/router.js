import Login from "../pages/Login"
import Register from "../pages/Register"
import Index from "../pages/Index"
import Forgotpassword from "../pages/Forgotpassword"
import Analytics from "../pages/Analytics"
import CRM from "../pages/CRM"
import Ecommerce from "../pages/Ecommerce"
import Email from "../pages/Email"
import Chat from "../pages/Chat"
import Calendar from "../pages/Calendar"
import Invoicelist from "../pages/invoice/Invoicelist"
import Preview from "../pages/invoice/Preview"
import Edit from "../pages/invoice/Edit"
import Add from "../pages/invoice/Add"
import Userlist from "../pages/user/Userlist"
import Account from "../pages/user/Account"
import Security from "../pages/user/Security"
import Billingplan from "../pages/user/Billingplan"
import Notifications from "../pages/user/Notifications"
import Connection from "../pages/user/Connection"
import Roles from "../pages/Roles"
import Permissions from "../pages/Permissions"
import Profile from "../pages/pages/Profile"
import Teams from "../pages/pages/Teams"
import Projects from "../pages/pages/Projects"
import Connections from "../pages/pages/Connections"
import Account1 from "../pages/pages/Account1"
import Security1 from "../pages/pages/Security1"
import Notifications1 from "../pages/pages/Notifications1"
import Connections1 from "../pages/pages/Connections1"
import Billingplan1 from "../pages/pages/Billingplan1"
import Faq from "../pages/pages/Faq"
import Helpcenter from "../pages/pages/Helpcenter"
import Pricing from "../pages/pages/Pricing"
import Checkout from "../pages/wizard/Checkout"
import Propertylisting from "../pages/wizard/Propertylisting"
import Createdeal from "../pages/wizard/Createdeal"
import Dialog from "../pages/Dialog"
import Typography from "../pages/ui/Typography" 
import Icons from "../pages/ui/Icons"
import Iconstest from "../pages/ui/Iconstest"
import Formlayouts from "../pages/Formlayouts"
import Formvalidation from "../pages/Formvalidation"
import Formwizard from "../pages/Formwizard"
import Table from "../pages/Table"
import Muidatagrid from "../pages/Muidatagrid"
import Apex from "../pages/Apex"
import Recharts from "../pages/Recharts"
import Chartjs from "../pages/Chartjs"
import Accesscontrol from "../pages/Accesscontrol"
import { Basic, Advanced, Statistics, Widgets, Gamification, Actions } from '../pages/cards/Export'
import { Accordion, Alerts, Avatars, Badges, Buttongroup, Buttons, Chips, Dialogs, List, Menu, Pagination, Progress, Ratings, Snackbar, Swiper, Tabs, Timeline, Toasts, Treeview, More, Test } from '../pages/components/Export'
import { Textfield, Select, Checkbox, Radio, Switch, Slider, Datepickers, Fileuploader, Autocomplete,Custominputs, Textarea,Editor,Inputmask, Test1 } from '../pages/formelements/Export'
const routes = [
    { path:'/',
        element:<Login/> 
    },
    { path:'/register',
        element:<Register/> 
    },
    { path:'/forgotpassword',
        element:<Forgotpassword/>
    },
     { path:'/index',
        element:<Index/>,
        children:[
            {path:'/index/dashboards/analytics',
            element:<Analytics/>,},
            {path:'/index/dashboards/crm',
            element:<CRM/>,},
            {path:'/index/dashboards/ecommerce',
            element:<Ecommerce/>,
            },
            {path:'/index/email',
            element:<Email/>,
            },
            {path:'/index/chat',
            element:<Chat/>,
            },
            {path:'/index/calendar',
            element:<Calendar/>,
            },
            {path:'/index/invoice/list',
            element:<Invoicelist/>,
            },
            {path:'/index/invoice/preview',
            element:<Preview/>,
            },
            {path:'/index/invoice/edit',
            element:<Edit/>,
            },
            {path:'/index/invoice/add',
            element:<Add/>,
            },
            {path:'/index/user/list',
            element:<Userlist/>,
            },
            {path:'/index/user/view/account',
            element:<Account/>,
            },
            {path:'/index/user/view/security',
            element:<Security/>,
            },
            {path:'/index/user/view/billingplan',
            element:<Billingplan/>,
            },
            {path:'/index/user/view/notifications',
            element:<Notifications/>,
            },
            {path:'/index/user/view/connection',
            element:<Connection/>,
            },
            {path:'/index/rolepermission/roles',
            element:<Roles/>,
            },
            {path:'/index/rolepermission/permissions',
            element:<Permissions/>,
            },
            {path:'/index/pages/userprofile/profile',
            element:<Profile/>,
            },
            {path:'/index/pages/userprofile/teams',
            element:<Teams/>,
            },
            {path:'/index/pages/userprofile/projects',
            element:<Projects/>,
            },
            {path:'/index/pages/userprofile/connections',
            element:<Connections/>,
            },
            {path:'/index/pages/accountsettings/account',
            element:<Account1/>,
            },
            {path:'/index/pages/accountsettings/security',
            element:<Security1/>,
            },
            {path:'/index/pages/accountsettings/notifications',
            element:<Notifications1/>,
            },
            {path:'/index/pages/accountsettings/connections',
            element:<Connections1/>,
            },
            {path:'/index/pages/accountsettings/billingplan',
            element:<Billingplan1/>,
            },
            {path:'/index/pages/faq',
            element:<Faq/>,
            },
            {path:'/index/pages/helpcenter',
            element:<Helpcenter/>,
            },
            {path:'/index/pages/pricing',
            element:<Pricing/>,
            },
            {path:'/index/wizard/checkout',
            element:<Checkout/>,
            },
            {path:'/index/wizard/propertylisting',
            element:<Propertylisting/>,
            },
            {path:'/index/wizard/createdeal',
            element:<Createdeal/>,
            },
            {path:'/index/dialog',
            element:<Dialog/>,
            },
            {path:'/index/ui/typography',
            element:<Typography/>,
            },
            {path:'/index/ui/icons',
            element:<Icons/>,
            },
            {path:'/index/ui/iconstest',
            element:<Iconstest/>,
            },
            {path:'/index/ui/cards/basic',
            element:<Basic/>,
            },
            {path:'/index/ui/cards/advanced',
            element:<Advanced/>,
            },
            {path:'/index/ui/cards/statistics',
            element:<Statistics/>,
            },
            {path:'/index/ui/cards/widgets',
            element:<Widgets/>,
            },
            {path:'/index/ui/cards/gamification',
            element:<Gamification/>,
            },
            {path:'/index/ui/cards/actions',
            element:<Actions/>,
            },
            {path:'/index/ui/components/accordion',
            element:<Accordion/>,
            },
            {path:'/index/ui/components/alerts',
            element:<Alerts/>,
            },
            {path:'/index/ui/components/avatars',
            element:<Avatars/>,
            },
            {path:'/index/ui/components/badges',
            element:<Badges/>,
            },
            {path:'/index/ui/components/buttongroup',
            element:<Buttongroup/>,
            },
            {path:'/index/ui/components/buttons',
            element:<Buttons/>,
            },
            {path:'/index/ui/components/chips',
            element:<Chips/>,
            },
            {path:'/index/ui/components/dialogs',
            element:<Dialogs/>,
            },
            {path:'/index/ui/components/list',
            element:<List/>,
            },
            {path:'/index/ui/components/menu',
            element:<Menu/>,
            },
            {path:'/index/ui/components/pagination',
            element:<Pagination/>,
            },
            {path:'/index/ui/components/progress',
            element:<Progress/>,
            },
            {path:'/index/ui/components/ratings',
                element:<Ratings/>,
            },
            {path:'/index/ui/components/snackbar',
                element:<Snackbar/>,
            },
            {path:'/index/ui/components/swiper',
                element:<Swiper/>,
            },
            {path:'/index/ui/components/tabs',
                element:<Tabs/>,
            },
            {path:'/index/ui/components/timeline',
                element:<Timeline/>,
            },
            {path:'/index/ui/components/toasts',
                element:<Toasts/>,
            },
            {path:'/index/ui/components/treeview',
                element:<Treeview/>,
            },
            {path:'/index/ui/components/more',
                element:<More/>,
            },
            {path:'/index/ui/components/test',
                element:<Test/>,
            },
            {path:'/index/forms/formelements/textfield',
                element:<Textfield/>,
            },
            {path:'/index/forms/formelements/textarea',
                element:<Textarea/>,
            },
            {path:'/index/forms/formelements/select',
                element:<Select/>,
            },
            {path:'/index/forms/formelements/checkbox',
                element:<Checkbox/>,
            },
            {path:'/index/forms/formelements/radio',
                element:<Radio/>,
            },
            {path:'/index/forms/formelements/switch',
                element:<Switch/>,
            },
            {path:'/index/forms/formelements/slider',
                element:<Slider/>,
            },
            {path:'/index/forms/formelements/custominputs',
                element:<Custominputs/>,
            },
            {path:'/index/forms/formelements/datepickers',
                element:<Datepickers/>,
            },
            {path:'/index/forms/formelements/autocomplete',
                element:<Autocomplete/>,
            },
            {path:'/index/forms/formelements/fileuploader',
                element:<Fileuploader/>,
            },
            {path:'/index/forms/formelements/editor',
                element:<Editor/>,
            },
            {path:'/index/forms/formelements/inputmask',
                element:<Inputmask/>,
            },
            {path:'/index/forms/formelements/test',
                element:<Test1/>,
            },
            {path:'/index/forms/formlayouts',
                element:<Formlayouts/>,
            },
            {path:'/index/forms/formvalidation',
                element:<Formvalidation/>,
            },
            {path:'/index/forms/formwizard',
                element:<Formwizard/>,
            },
            {path:'/index/forms/table',
                element:<Table/>,
            },
            {path:'/index/forms/muidatagrid',
                element:<Muidatagrid/>,
            },
            {path:'/index/charts/apex',
                element:<Apex/>,
            },
            {path:'/index/charts/chartjs',
                element:<Chartjs/>,
            },
            {path:'/index/charts/recharts',
                element:<Recharts/>,
            },
            {path:'/index/accesscontrol',
                element:<Accesscontrol/>,
            }
               
           
          

        ]
    },
]

export default routes