import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { EventsComponent } from './events/events.component';
import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes = [
  { component: HomeComponent, path: "home" },
  { component: RegisterationComponent, path: "Rgc" },
  { component: LoginComponent, path: "Login" },
  { component: MembersComponent, path: "Members" },
  { component: EventsComponent, path: "Events" },
  { component: FirstPageComponent, path: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
