import { Component, signal } from '@angular/core';
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
  IonButtons,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bagAddOutline,
  menuOutline,
  chevronForwardOutline,
  arrowBackOutline,
} from 'ionicons/icons';
import { environment } from 'src/environments/environment.prod';
import { Doctor } from 'src/types/doctor.type';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButtons,
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
  public searchResults = signal<Doctor[]>([]);

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

  public async handleSearchInput(event: Event): Promise<void> {
    const target = event.target as HTMLIonSearchbarElement;
    if (!target.value) {
      this.searchResults.set([]);
      return;
    }

    const searchTerm = target.value?.toLocaleLowerCase() || '';

    try {
      const res = await fetch(
        `${environment.apiUrl}/public/search/doc/${searchTerm}`
      );

      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }

      const json = await res.json();
      this.searchResults.set(json);
    } catch (error) {
      console.log(error);
    }
  }
}
