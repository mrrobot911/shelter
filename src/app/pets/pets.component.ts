import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { pets } from '../shelterHelp';
import { Shuffle } from '../utils/shuffle';
import { ModalServiceService } from '../shared/services/modal-service.service';
import { Subscription } from 'rxjs';
import { Pets } from 'src/app/shelterHelp';

@Component({
  selector: 'shelter-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalServiceService) { }
  @ViewChild('modal2', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  pets = [...pets];
  displayedData: typeof pets = [];
  shuffledData: typeof pets = [];
  allPages = 8;
  itemsPerPage = 1;
  getScreenWidth = 0;

  createModal(pet:Pets) {
    this.sub = this.modalService
      .openModal(this.entry, pet)
      .subscribe((v) => {
        //your logic
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
  ngOnInit(){
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
