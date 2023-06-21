import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: '././register.component.html',
  styleUrls: ['././register.component.css']
})
export class registerComponent {
  firstName!: string;
  lastName!: string;
  tc!: string;
  address!: string;
  role!: string;

  submitForm() {
    // Form verilerini işleme kodunu buraya ekleyin
    console.log('Form gönderildi');
    console.log('Ad:', this.firstName);
    console.log('Soyad:', this.lastName);
    console.log('TC:', this.tc);
    console.log('Adres:', this.address);
    console.log('Bölüm:', this.role);
  }
}
