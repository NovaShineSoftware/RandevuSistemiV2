import { Component } from '@angular/core';

@Component({
  selector: 'adminBildirim',
  templateUrl: '././adminBildirim.component.html',
  styleUrls: ['././adminBildirim.component.css']
})
export class adminBildirimComponent {
    //alınan bildirimin durum sütunundaki renge göre bildirim rengi değişir.veritababnından diziye veri çekilmeli sadece
    notifications = [
        { message: 'Başarılı bir işlem gerçekleştirildi.', status: 'success' },
        { message: 'Bilgilendirme mesajı.', status: 'info' },
        { message: 'Bilgilendirme mesajı.', status: 'info' },
        { message: 'Uyarı! Bu bir uyarı mesajıdır.', status: 'warning' },
        { message: 'Hata! Bir hata oluştu.', status: 'error' }
      ];
    
      getNotificationClass(status: string): string {
        switch (status) {
          case 'success':
            return 'alert alert-success';
          case 'info':
            return 'alert alert-info';
          case 'warning':
            return 'alert alert-warning';
          case 'error':
            return 'alert alert-danger';
          default:
            return 'alert';
        }
      }
    
      getNotificationIcon(status: string): string {
        switch (status) {
          case 'success':
            return 'bi bi-check-circle-fill';
          case 'info':
            return 'bi bi-info-circle-fill';
          case 'warning':
            return 'bi bi-exclamation-triangle-fill';
          case 'error':
            return 'bi bi-x-circle-fill';
          default:
            return 'bi';
        }
      }
    }