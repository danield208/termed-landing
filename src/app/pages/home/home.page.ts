import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonItem,
  IonIcon,
  IonSearchbar,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
  IonList,
  IonImg,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bagAddOutline,
  menuOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonImg,
    IonList,
    IonButton,
    IonCol,
    IonRow,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonSearchbar,
    IonIcon,
    IonItem,
    IonContent,
    IonCard,
  ],
})
export class HomePage {
  constructor() {
    addIcons({ bagAddOutline, menuOutline, chevronForwardOutline });
  }
}
