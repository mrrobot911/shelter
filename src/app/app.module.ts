import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PetsComponent } from './pets/pets.component';
import { ExtraOptions, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponentComponent } from './shared/components/modal-component/modal-component.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PetsComponent,
    PaginationComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'pets', component: PetsComponent },
    ], routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
