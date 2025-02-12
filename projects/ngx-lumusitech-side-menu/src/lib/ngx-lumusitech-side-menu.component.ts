import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-ngx-lumusitech-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './ngx-lumusitech-side-menu.component.html',
  styles: ``,
})
export class NgxLumusitechSideMenuComponent {
  isAuthenticated = input<boolean>(false);

  title = input<string>('Lumusitech');
  subtitle = input<string>('Corp');

  titleColor = input<TitleColor>(TitleColor.purple);

  onSignOut = output();
  onSignIn = output();
}
