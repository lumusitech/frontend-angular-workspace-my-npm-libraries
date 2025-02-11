import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { NgxLumusitechSideMenuComponent } from './ngx-lumusitech-side-menu.component';

describe('NgxLumusitechSideMenuComponent', () => {
  let component: NgxLumusitechSideMenuComponent;
  let fixture: ComponentFixture<NgxLumusitechSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLumusitechSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxLumusitechSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when the logout button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const loginButton = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(loginButton).toBeTruthy();

    loginButton.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when the logout button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const logoutButton = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(logoutButton).toBeTruthy();

    logoutButton.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();
  });
});
