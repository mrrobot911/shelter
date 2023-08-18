import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { pets, products } from '../shelterHelp';
import { Router } from '@angular/router';
import { ModalServiceService } from '../shared/services/modal-service.service';
import { Subscription } from 'rxjs';
import { Pets } from 'src/app/shelterHelp';

@Component({
  selector: 'shelter-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private modalService: ModalServiceService) { }
  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  products = [...products];
  pets = [...pets];
  left = '0px';
  step = 0;
  getScreenWidth = 0;
  wrapper = 0;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.step = this.dataStep();
    this.wrapper = this.dataWrapper();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.step = this.dataStep();
    this.wrapper = this.dataWrapper();
    this.left = '0px';
  }

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
  clickRight(){
    const temp = parseInt(this.left);
    if(temp === -(this.wrapper)) {
      this.left = `-${this.wrapper}px`;
    } else {
      this.left = `${temp - this.step}px`;
    }
  }
  clickLeft(){
    const temp = parseInt(this.left);
    if(temp === 0) {
      this.left = '0px';
    } else {
      this.left = `${temp + this.step}px`;
    }
  }
  petsLink(){
    this.router.navigateByUrl('/pets');
  }
  dataStep = () => {
    if (this.getScreenWidth <= 1200){
      return 310
    } else {
      return 360
    }
  }
  dataWrapper = () => {
    if (this.getScreenWidth <= 760){
      return 2170
    } else if (this.getScreenWidth <= 1200){
      return 1860
    } else {
      return 1800
    }
  }
}
