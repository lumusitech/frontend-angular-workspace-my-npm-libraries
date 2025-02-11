import { Component, signal } from '@angular/core';
import {
  NgxLumusitechSideMenuComponent,
  TitleColor,
} from 'ngx-lumusitech-side-menu';

@Component({
  selector: 'app-root',
  imports: [NgxLumusitechSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  TitleColor = TitleColor;

  isAuthenticated = signal(true);
}
