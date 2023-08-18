import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shelter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  flag = true;
  burger = false;
  constructor(private router: Router) { }
  ngOnInit() {
    this.flag = this.router.url === '/pets';
  }
  clickBurger() {
    this.burger = !this.burger;
  }
}
