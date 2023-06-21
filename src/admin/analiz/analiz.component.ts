import { Component } from '@angular/core';

@Component({
  selector: 'analiz',
  templateUrl: '././analiz.component.html',
  styleUrls: ['././analiz.component.css']
})
export class analizComponent {
haftaBaslangici: Date = new Date('2023-05-02'); // Haftanın başlangıç tarihini belirleyin
  gunler: Date[] = [];
  personeller: string[] = ['Personel 1', 'Personel 2', 'Personel 3']; // Personel adlarını içeren dizi
  gorevler: string[][] = [
    ['ışık Deniz 09.00', 'Görev 2', 'yıldırım 14.00', '', 'Görev 5','',''], // Personel 1'in görevleri görev olmayan yerler sarı olur
    ['Görev 6', '', 'Görev 8', 'Görev 9', 'Görev 10','',''], // Personel 2'nin görevleri
    ['Görev 11', 'Görev 12', '','', 'Görev 14', 'Görev 15',''] // Personel 3'ün görevleri
  ];

  constructor() {
    this.gunleriDoldur();
  }

  gunleriDoldur() {
    const haftaSonu = new Date(this.haftaBaslangici.getTime() + 6 * 24 * 60 * 60 * 1000); // Haftanın son gününü hesaplayın

    for (let i = this.haftaBaslangici.getTime(); i <= haftaSonu.getTime(); i += 24 * 60 * 60 * 1000) {
      const gun = new Date(i);
      this.gunler.push(gun);
    }
  }
}