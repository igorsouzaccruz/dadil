import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent) 
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'new-report', 
    loadComponent: () => import('./pages/new-report/new-report.component').then(c => c.DenunciaFormComponent),
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-reports', 
    loadComponent: () => import('./pages/my-reports/my-reports.component').then(c => c.MyReportsComponent),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];