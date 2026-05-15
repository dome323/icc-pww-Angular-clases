import { Component } from '@angular/core';

import { AppHeroComponent } from '../../../components/hero/app-hero';

@Component({
  selector: 'app-home-page',

  standalone: true,

  imports: [AppHeroComponent],

  templateUrl: './home-page.html',

  styleUrl: './home-page.css'
})
export class HomePage {

}