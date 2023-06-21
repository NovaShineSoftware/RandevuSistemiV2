import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { clientComponent } from 'src/clients/client/client.component';
import { clientAnalizComponent } from 'src/clients/clientAnaliz/clientAnaliz.component';
import { clientBildirimComponent } from 'src/clients/clientBildirim/clientBildirim.component';
import { clientRandevuComponent } from 'src/clients/clientRandevu/clientRandevu.component';
import { clientRandevularimComponent } from 'src/clients/clientRandevularim/clientRandevularim.component';
import { personelComponent } from 'src/clients/personelKadro/personel.component';
import { employeeComponent } from 'src/employees/employee/employee.component';
import { employeeAnalizComponent } from 'src/employees/employeeAnaliz/employeeAnaliz.component';

import { employeeBildirimComponent } from 'src/employees/employeeBildirim/employeeBildirim.component';
import { employeeRandevuComponent } from 'src/employees/employeeRandevu/employeeRandevu.component';
import { employeeRandevularimComponent } from 'src/employees/employeeRandevularim/employeeRandevularim.component';
import { musteriComponent } from 'src/employees/musteri/musteri.component';
import { loginComponent } from 'src/login/login.component';
import { navbarComponent } from 'src/clients/navbar/navbar.component';
import { ChatComponent } from 'src/clients/chat/chat.component';
import { employeeNavbarComponent } from 'src/employees/employeeNavbar/employeeNavbar.component';
import { employeeChatComponent } from 'src/employees/employeeChat/employeeChat.component';
import { adminNavbarComponent } from 'src/admin/adminNavbar/adminNavbar.component';
import { adminPagesComponent } from 'src/admin/adminPages/adminPages.component';
import { kullaniciComponent } from 'src/admin/kullanici/kullanici.component';
import { kadroComponent } from 'src/admin/kadro/kadro.component';
import { analizComponent } from 'src/admin/analiz/analiz.component';
import { adminBildirimComponent } from 'src/admin/adminBildirim/adminBildirim.component';
import { allRandevuComponent } from 'src/admin/allRandevu/allRandevu.component';
import { registerComponent } from 'src/admin/register/register.component';
import { newRandevuComponent } from 'src/admin/newRandevu/newRandevu.component';


const routes: Routes = [
  {path:'login',component:loginComponent},
  {path:'navbar',component:navbarComponent},
  {path:'client',component:clientComponent},
  {path:'clientRandevularim',component:clientRandevularimComponent},
  {path:'clientRandevu',component:clientRandevuComponent},
  {path:'clientAnaliz',component:clientAnalizComponent},
  {path:'clientBildirim',component:clientBildirimComponent},
  {path:'personel',component:personelComponent},
  {path:'employee',component:employeeComponent},
  {path:'employeeRandevu',component:employeeRandevuComponent},
  {path:'employeeRandevularim',component:employeeRandevularimComponent},
  {path:'employeeBildirim',component:employeeBildirimComponent},
  {path:'musteri',component:musteriComponent},
  {path:'employeeAnaliz',component:employeeAnalizComponent},
  {path:'chat',component:ChatComponent},
  {path:'employee-navbar',component:employeeNavbarComponent},
  {path:'employeeChat',component:employeeChatComponent},
  {path:'admin-navbar',component:adminNavbarComponent},
  {path:'adminPages',component:adminPagesComponent},
  {path:'kullanici',component:kullaniciComponent},
  {path:'kadro',component:kadroComponent},
  {path:'analiz',component:analizComponent},
  {path:'adminBildirim',component:adminBildirimComponent},
  {path:'allRandevu',component:allRandevuComponent},
  {path:'register',component:registerComponent},
  {path:'newRandevu',component:newRandevuComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
