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
import { specialty } from 'src/types/specialty.type';

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
  public searchResultsDocs = signal<Doctor[]>([]);
  public searchResultsSpecs = signal<specialty[]>([]);

  constructor() {
    addIcons({
      bagAddOutline,
      menuOutline,
      chevronForwardOutline,
      arrowBackOutline,
    });
  }

  public ngOnInit() {
    this.setSpecDefault();
  }

  /**
   * Opens a modal to show all available specialties
   * @param state Boolean from ionic clicked Component
   */
  public setOpen(state: boolean): void {
    this.isModalOpen = state;
  }

  /**
   * Executed after a set amount of time if user is searching
   * @param event Ionic input event from searchbar
   * @returns void
   */
  public handleSearchInput(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    if (!target.value) {
      this.searchResultsDocs.set([]);
      this.setSpecDefault();
      return;
    }

    const searchTerm = target.value?.toLocaleLowerCase() || '';

    this.filterDocs(searchTerm);
    this.filterSpecialty(searchTerm);
  }

  /**
   * Filter doctors by their names
   * @param term search term provided by caller function
   */
  private async filterDocs(term: string): Promise<void> {
    try {
      const res = await fetch(
        `${environment.apiUrl}/public/search/doc/${term}`
      );

      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }

      const json = await res.json();
      this.searchResultsDocs.set(json);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Filter specialties by their titles
   * @param term search term provided by caller function
   */
  private async filterSpecialty(term: string): Promise<void> {
    try {
      const res = await fetch(
        `${environment.apiUrl}/public/search/special/${term}`
      );

      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }

      const json = await res.json();
      this.searchResultsSpecs.set(json);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Set default - first 5 - specialties for default display
   */
  private async setSpecDefault(): Promise<void> {
    try {
      const res = await fetch(`${environment.apiUrl}/public/firstspecial`);

      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }

      const json = await res.json();
      this.searchResultsSpecs.set(json);
    } catch (error) {
      console.log(error);
    }
  }
}
