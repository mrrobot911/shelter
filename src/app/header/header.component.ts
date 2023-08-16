import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shelter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  flag = true;
  constructor(private router: Router) { }
  ngOnInit() {
    this.flag = this.router.url === '/pets';
  }
}
