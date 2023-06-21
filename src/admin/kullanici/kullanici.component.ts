import { Component } from '@angular/core';

@Component({
  selector: 'kullanici',
  templateUrl: '././kullanici.component.html',
  styleUrls: ['././kullanici.component.css']
})
export class kullaniciComponent {
    title:any="Öğrenci Listesi"
   //öğrenci listesi
    kullaniciListesi = [
        { id: 1, ad: 'John', soyad: 'Doe', tc: '12345678901', adres: 'İstanbul', telefon: '555-1234', eposta: 'john@example.com' },
        { id: 2, ad: 'Jane', soyad: 'Doe', tc: '98765432109', adres: 'Ankara', telefon: '555-5678', eposta: 'jane@example.com' },
        // Diğer kullanıcılar...
      ];
    
      constructor() {
        // Bileşenle ilgili gerekli kodlar buraya gelebilir
      }
      silKullanici(id: number) {
        // Silme işlemi gerçekleştirildiğinde yapılacak işlemleri burada tanımlayın
        console.log("silindi");
      }
      guncelleKullanici(id: number) {
        // Güncelleme işlemi gerçekleştirildiğinde yapılacak işlemleri burada tanımlayın
        console.log("Kullanıcı güncellendi: " + id);
      }

}
