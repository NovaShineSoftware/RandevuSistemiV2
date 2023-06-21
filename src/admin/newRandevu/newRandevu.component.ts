import { Component } from '@angular/core';

@Component({
  selector: 'newRandevu',
  templateUrl: '././newRandevu.component.html',
  styleUrls: ['././newRandevu.component.css']
})
export class newRandevuComponent {
  studentName!: string;
  date!: string;
  time!: string;
  instructor!: string;
  ders!:string;
  submitForm() {
    // Form verilerini işleme almak için burada yapılacak işlemleri ekleyin
    console.log('Form Gönderildi');
    console.log('Öğrenci Adı:', this.studentName);
    console.log('Tarih:', this.date);
    console.log('Saat:', this.time);
    console.log('Hoca Adı:', this.instructor);
  }
}
