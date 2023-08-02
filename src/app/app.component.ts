import { Component } from '@angular/core';
import { MessageService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
}

}