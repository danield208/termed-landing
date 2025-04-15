import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-kontact',
  imports: [IonContent],
  template: ` <ion-content>
    <p>Kontakt</p>
  </ion-content>`,
})
export class KontactPage {
  constructor() {}
}
