import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-primary-600 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/dashboard" class="flex items-center">
              <span class="text-2xl font-bold">EcoReport</span>
            </a>
          </div>
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a routerLink="/dashboard" 
                   routerLinkActive="bg-primary-700" 
                   [routerLinkActiveOptions]="{exact: true}"
                   class="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                  Dashboard
                </a>
                <a routerLink="/new-report" 
                   routerLinkActive="bg-primary-700"
                   class="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                  Nova Denúncia
                </a>
                <a routerLink="/my-reports" 
                   routerLinkActive="bg-primary-700"
                   class="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
                  Minhas Denúncias
                </a>
              </div>
            </div>
            <button 
              (click)="logout()" 
              class="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-primary-700 hover:bg-primary-800 transition-colors">
              Sair
            </button>
          </div>
          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button 
              type="button" 
              (click)="toggleMobileMenu()"
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-700 focus:outline-none">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <ng-container *ngIf="!isMobileMenuOpen">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </ng-container>
                <ng-container *ngIf="isMobileMenuOpen">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </ng-container>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden animate-fade-in">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a routerLink="/dashboard" 
             routerLinkActive="bg-primary-700" 
             [routerLinkActiveOptions]="{exact: true}"
             class="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 transition-colors">
            Dashboard
          </a>
          <a routerLink="/new-report" 
             routerLinkActive="bg-primary-700"
             class="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 transition-colors">
            Nova Denúncia
          </a>
          <a routerLink="/my-reports" 
             routerLinkActive="bg-primary-700"
             class="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700 transition-colors">
            Minhas Denúncias
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  constructor(private authService: AuthService) { }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout(): void {
    this.authService.logout();
  }
}