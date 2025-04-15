import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  imports: [IonContent],
  template: ` <ion-content>
    <p>Über uns</p>
  </ion-content>`,
})
export class AboutPage {
  constructor() {}
}
