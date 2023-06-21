import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'employee-navbar',
  templateUrl: '././employeeNavbar.component.html',
  styleUrls: ['././employeeNavbar.component.css']
})
export class employeeNavbarComponent implements OnInit {
    menuItems: MenuItem[];
  
    constructor() {
      this.menuItems = [
        { label: 'randevu', link: '/employeeRandevu' },
        { label: 'randevularım', link: '/employeeRandevularim' },
        { label: 'analiz', link: '/employeeAnaliz' },
        { label: 'mesaj', link: '/employeeChat' },
        { label: 'öğrenciler', link: '/musteri' }
      ];
    }
  
    ngOnInit(): void {
      // İlgili işlemleri OnInit içinde gerçekleştirin
    }
  }
  
  interface MenuItem {
    label: string;
    link: string;
  }