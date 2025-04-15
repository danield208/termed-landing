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
  IonNav,
  IonNavLink,
  IonButton,
  IonRippleEffect,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonRippleEffect,
    IonButton,
    RouterLink,
    IonNavLink,
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
