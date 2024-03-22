import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, HeroesComponent, MessagesComponent, DashboardComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
