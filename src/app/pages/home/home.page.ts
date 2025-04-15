import { Component } from '@angular/core';
import {
  IonContent,
  IonText,
  IonGrid,
  IonRow,
  IonCard,
  IonItem,
  IonIcon,
  IonSearchbar,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonSearchbar,
    IonIcon,
    IonItem,
    IonRow,
    IonGrid,
    IonText,
    IonContent,
    IonCard,
  ],
})
export class HomePage {
  constructor() {}
}
