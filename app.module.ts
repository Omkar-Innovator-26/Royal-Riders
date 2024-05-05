import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MembersComponent } from './members/members.component';
import { EventsComponent } from './events/events.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstPageComponent,
    RegisterationComponent,
    MembersComponent,
    EventsComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
