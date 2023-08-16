import { Component, HostListener } from '@angular/core';
import { pets } from '../shelterHelp';
import { Shuffle } from '../utils/shuffle';

@Component({
  selector: 'shelter-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
  pets = [...pets];
  displayedData: typeof pets = [];
  shuffledData: typeof pets = [];
  allPages = 8;
  itemsPerPage = 1;
  getScreenWidth = 0;

  constructor(){
    this.getScreenWidth = window.innerWidth;
    this.shuffledData = Shuffle(this.pets);
    this.displayedData = this.dataWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.displayedData = this.dataWidth();
  }
  onPageChange(page: number = 1): void {
    this.shuffledData = Shuffle(this.shuffledData);
    this.displayedData = this.dataWidth();
  }
  dataWidth = () => {
    if (this.getScreenWidth <= 620){
      return this.shuffledData.slice(0,3);
    } else if (this.getScreenWidth <= 1220){
      return this.shuffledData.slice(0,6);
    } else {
      return this.shuffledData;
    }
  }
}
