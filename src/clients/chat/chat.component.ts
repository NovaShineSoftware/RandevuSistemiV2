import { Component } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: '././chat.component.html',
  styleUrls: ['././chat.component.css']
})
export class ChatComponent {
  messages: any[] = [
    { sender: 'Ahmet', content: 'Merhaba!' },
    { sender: 'Ayşe', content: 'Merhaba Ahmet!' }
  ];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Ben', content: this.newMessage });
      this.newMessage = '';
    }
  }
}
