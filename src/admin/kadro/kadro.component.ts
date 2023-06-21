import { Component } from '@angular/core';

@Component({
  selector: 'kadro',
  templateUrl: '././kadro.component.html',
  styleUrls: ['././kadro.component.css']
})
export class kadroComponent {
    title:any="Personel Listesi"
   //personel  listesi
    personelListesi = [
        { id: 1, ad: 'John', soyad: 'Doe', tc: '12345678901', adres: 'İstanbul', telefon: '555-1234', eposta: 'john@example.com' },
        { id: 2, ad: 'Jane', soyad: 'Doe', tc: '98765432109', adres: 'Ankara', telefon: '555-5678', eposta: 'jane@example.com' },
        // Diğer kullanıcılar...
      ];
    
      constructor() {
        // Bileşenle ilgili gerekli kodlar buraya gelebilir
      }
      silPersonel(id: number) {
        // Silme işlemi gerçekleştirildiğinde yapılacak işlemleri burada tanımlayın
        console.log("silindi");
      }
      guncellePersonel(id: number) {
        // Güncelleme işlemi gerçekleştirildiğinde yapılacak işlemleri burada tanımlayın
        console.log("personel güncellendi: " + id);
      }

}