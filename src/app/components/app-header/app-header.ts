import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  readonly brand = signal("PPW Angular")
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    () => 
      (this.showInfo() 
    ? "Ocultar información" 
    : "Mostrar información"));
  toggleInfo(){
    this.showInfo.update((valor) => !valor);
  }

  changeBrand() : void {
    this.brand.update((valor) => valor + '!');
  }

  resetBrand() : void {
    this.brand.set("PPW Angular");
  }



}