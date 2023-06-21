import { Component } from '@angular/core';

@Component({
  selector: 'admin-navbar',
  templateUrl: '././adminNavbar.component.html',
  styleUrls: ['././adminNavbar.component.css']
})
export class adminNavbarComponent {
  menuItems: MenuItem[] = [
    { title: 'Kayıt', link: '/register' },
    { title: 'Yeni Randevu', link: '/newRandevu' },
    { title: 'mesaj', link: '/adminChat' },
    { title: 'Analiz', link: '/analiz' },
   
  ];

}

interface MenuItem {
  title: string;
  link: string;
}
