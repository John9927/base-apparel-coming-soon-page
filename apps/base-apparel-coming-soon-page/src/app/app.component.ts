import { Component } from '@angular/core';

@Component({
  selector: 'base-apparel-coming-soon-page-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'base-apparel-coming-soon-page';

  onClickSubmit(email: any) {
    console.log(email)
  }
}
