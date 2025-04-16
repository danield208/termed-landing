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
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bagAddOutline,
  menuOutline,
  chevronForwardOutline,
  arrowBackOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonModal,
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
  public isModalOpen = false;

  constructor() {
    addIcons({
      bagAddOutline,
      menuOutline,
      chevronForwardOutline,
      arrowBackOutline,
    });
  }

  public setOpen(state: boolean): void {
    this.isModalOpen = state;
  }
}
