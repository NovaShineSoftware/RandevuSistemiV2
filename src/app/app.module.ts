import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from 'src/login/login.component';
import { navbarComponent } from 'src/clients/navbar/navbar.component';
import { clientComponent } from 'src/clients/client/client.component';
import { clientRandevuComponent } from 'src/clients/clientRandevu/clientRandevu.component';
import { clientRandevularimComponent } from 'src/clients/clientRandevularim/clientRandevularim.component';
import { clientAnalizComponent } from 'src/clients/clientAnaliz/clientAnaliz.component';
import { clientBildirimComponent } from 'src/clients/clientBildirim/clientBildirim.component';
import { personelComponent } from 'src/clients/personelKadro/personel.component';
import { employeeComponent } from 'src/employees/employee/employee.component';
import { employeeRandevuComponent } from 'src/employees/employeeRandevu/employeeRandevu.component';
import { employeeRandevularimComponent } from 'src/employees/employeeRandevularim/employeeRandevularim.component';
import { employeeBildirimComponent } from 'src/employees/employeeBildirim/employeeBildirim.component';

import { musteriComponent } from 'src/employees/musteri/musteri.component';
import { employeeAnalizComponent } from 'src/employees/employeeAnaliz/employeeAnaliz.component';
import { ChatComponent } from 'src/clients/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { employeeNavbarComponent } from 'src/employees/employeeNavbar/employeeNavbar.component';
import { employeeChatComponent } from 'src/employees/employeeChat/employeeChat.component';
@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    navbarComponent,
    clientComponent,
    clientRandevuComponent,
    clientRandevularimComponent,
    clientAnalizComponent,
    clientBildirimComponent,
    personelComponent,
    employeeComponent,
    employeeRandevuComponent,
    employeeRandevularimComponent,
    employeeBildirimComponent,
    employeeAnalizComponent,
    musteriComponent,
    ChatComponent,
    employeeNavbarComponent,
    employeeChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
