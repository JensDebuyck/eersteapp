import { Routes } from '@angular/router';
import { LandenComponent } from './landen/landen.component';
import { TopInwonersComponent } from './top-inwoners/top-inwoners.component';
import { LandDetailsComponent } from './land-details/land-details.component';

export const routes: Routes = [
    {
        component:LandenComponent,
        path:'landen',
        title:'Landen'
    },
    {
        component: TopInwonersComponent,
        path:'top',
        title:'Top 3 landen'
    },
    {path:'',redirectTo:'/top',pathMatch:'full'},
    {
        path:'detail/:id',
        component: LandDetailsComponent,
}
];
