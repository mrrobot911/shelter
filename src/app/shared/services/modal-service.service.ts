import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponentComponent } from '../components/modal-component/modal-component.component';
import { Pets } from 'src/app/shelterHelp';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  private componentRef!: ComponentRef<ModalComponentComponent>;
  private componentSubscriber!: Subject<string>;
  constructor(private resolver: ComponentFactoryResolver) {}

  openModal(entry: ViewContainerRef, modalPet: Pets) {
    let factory = this.resolver.resolveComponentFactory(ModalComponentComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.img = modalPet.image;
    this.componentRef.instance.name = modalPet.name;
    this.componentRef.instance.breed = modalPet.breed;
    this.componentRef.instance.text = modalPet.text;
    this.componentRef.instance.age = modalPet.age;
    this.componentRef.instance.inoculations = modalPet.inoculations;
    this.componentRef.instance.diseases = modalPet.diseases;
    this.componentRef.instance.parasites = modalPet.parasites;
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }
}
