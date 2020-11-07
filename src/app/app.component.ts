import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'user';

  isUsernameEmpty() {
    return this.username.trim().length == 0;
  }

  resetUsername() {
    this.username = '';
  }
}
