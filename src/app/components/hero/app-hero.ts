import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './app-hero.html',
  styleUrl: './app-hero.css',
})
export class AppHeroComponent {
  readonly brand = signal('PPW Angular 21');
  readonly showInfo = signal(false);
  readonly toggleLabel = computed(() => (this.showInfo() ? 'Ocultar info' : 'Mostrar info'));

  toggleInfo(): void {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    this.brand.update((b) => b + '!');
  }

  resetBrand(): void {
    this.brand.set('PPW Angular 21');
  }
}