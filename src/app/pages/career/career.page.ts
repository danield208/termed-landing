import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-career',
  imports: [IonContent],
  template: ` <ion-content>
    <p>Karriere</p>
  </ion-content>`,
})
export class CareerPage {
  constructor() {}
}
