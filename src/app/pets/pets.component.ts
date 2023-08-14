import { Component } from '@angular/core';
import { pets } from '../shelterHelp';

@Component({
  selector: 'shelter-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
  pets = [...pets];
  buttons = ['<<', '<', 1, '>', '>>'];
}
