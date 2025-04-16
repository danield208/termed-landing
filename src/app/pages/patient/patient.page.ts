import { Component } from '@angular/core';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-patient',
  imports: [IonContent],
  template: ` <ion-content>
    <p>Patient</p>
  </ion-content>`,
})
export class PatientPage {}
