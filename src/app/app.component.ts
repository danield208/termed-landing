import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonContent,
  IonMenu,
  IonButtons,
  IonImg,
  IonButton,
  IonRippleEffect,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { medkitOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonIcon,
    IonRippleEffect,
    IonButton,
    RouterLink,
    IonImg,
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonContent,
    IonMenu,
    IonButtons,
  ],
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  constructor() {
    addIcons({
      personCircleOutline,
      medkitOutline,
    });
  }
}
