import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shelter-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit, OnDestroy {
  constructor() {}

  @Input() name: string = '';
  @Input() breed: string = '';
  @Input() text: string = '';
  @Input() img: string = '';
  @Input() age: string = '';
  @Input() inoculations: Array<string> = [];
  @Input() diseases: Array<string> = [];
  @Input() parasites: Array<string> = [];
  @Output() closeMeEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeMeEvent.emit();
  }

 ngOnDestroy(): void {
    console.log(' Modal destroyed');
  }
}
