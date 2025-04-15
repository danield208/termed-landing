import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  imports: [IonContent],
  template: ` <ion-content>
    <p>Produkte</p>
  </ion-content>`,
})
export class ProductsPage {
  constructor() {}
}
