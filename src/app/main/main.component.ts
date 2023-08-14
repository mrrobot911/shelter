import { Component } from '@angular/core';
import { pets, products } from '../shelterHelp';

@Component({
  selector: 'shelter-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  products = [...products];
  pets = [...pets];
}
