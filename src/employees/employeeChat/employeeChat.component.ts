import { Component } from '@angular/core';

@Component({
  selector: 'employeeChat',
  templateUrl: '././employeeChat.component.html',
  styleUrls: ['././employeeChat.component.css']
})
export class employeeChatComponent {
   mesajlar: any[] = [
        { ileten: 'Ayşe', saat: '12:30', mesaj: 'Merhaba!' },
        { ileten: 'Hoca', saat: '12:35', mesaj: 'Merhaba, size nasıl yardımcı olabilirim?' },
        { ileten: 'Kenan', saat: '12:35', mesaj: 'Merhaba, size nasıl yardımcı olabilirim?' }
      ];
    
      yeniMesaj: string = '';
    
      ilet(mesaj: string) {
        const yeniMesaj = {
        ileten: 'Hoca',
        saat: new Date().toLocaleTimeString(),
          mesaj:mesaj
        };
        this.mesajlar.push(yeniMesaj);
        this.yeniMesaj = ''; // Yeni mesajı gönderdikten sonra input alanını temizle
        };
       
       

}


    
    
    
    
    