import { Component, computed, effect, signal } from '@angular/core';
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
import { Specialty } from 'src/types/specialty.type';

type SpecialtyAlphabetical = {
  letter: string;
  specialties: Specialty[];
};

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
  public filteredSpecialties = signal<Specialty[]>([]);
  public specialties = signal<Specialty[]>([]);
  public specialtiesSortedAlpha = signal<SpecialtyAlphabetical[]>([]);

  private defaultSpecialties = computed<Specialty[]>(() =>
    this.specialties().slice(0, 5)
  );

  constructor() {
    addIcons({
      bagAddOutline,
      menuOutline,
      chevronForwardOutline,
      arrowBackOutline,
    });

    effect(() => {
      this.setSpecDefault(this.defaultSpecialties());
      this.specialtiesSortedAlpha.set(this.mapSpecialties(this.specialties()));
    });
  }

  public ngOnInit() {
    this.loadAllSpecialties();
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
      this.setSpecDefault(this.defaultSpecialties());
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
   * Get all specialties - needed for show all modem
   */
  private async loadAllSpecialties(): Promise<void> {
    try {
      const res = await fetch(`${environment.apiUrl}/public/secial/all`);

      if (!res.ok) {
        throw new Error(`res status: ${res.status}`);
      }

      const json = await res.json();
      this.specialties.set(json);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Filter specialties by their titles
   * @param term search term provided by caller function
   */
  private filterSpecialty(term: string): void {
    const sortedArray = this.specialties().filter((specialty) => {
      return specialty.title.toLowerCase().match(term);
    });

    this.filteredSpecialties.set(sortedArray);
  }

  /**
   * Set default - first 5 - specialties for default display
   */
  private setSpecDefault(specialties: Specialty[]): void {
    this.filteredSpecialties.set(specialties);
  }

  /**
   * Create Array with new object to list specialties in alphabetical groups
   */
  private mapSpecialties(specialties: Specialty[]): SpecialtyAlphabetical[] {
    console.log('letseGo');
    const sortedArray = specialties.reduce(
      (acc: SpecialtyAlphabetical[], spec) => {
        const prevArray = acc;
        const letter = spec.title.charAt(0).toUpperCase();

        if (!prevArray.find((item) => item.letter === letter)) {
          prevArray.push({ letter: letter, specialties: [] });
        }

        prevArray.forEach((item) => {
          if (item.letter === letter) {
            item.specialties.push(spec);
          }
        });

        const finalSortedArray = prevArray.sort((a, b) => {
          if (a.letter < b.letter) {
            return -1;
          }

          if (a.letter > b.letter) {
            return 1;
          }

          return 0;
        });

        return finalSortedArray;
      },
      []
    );

    console.log(sortedArray);

    return sortedArray;
  }
}
