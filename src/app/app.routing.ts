import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
// import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },

    // redirect to home
    // { path: '**', redirectTo: '' }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);