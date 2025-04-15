import { Component } from '@angular/core';
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
  IonNav,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonNav,
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
  constructor() {}
}
