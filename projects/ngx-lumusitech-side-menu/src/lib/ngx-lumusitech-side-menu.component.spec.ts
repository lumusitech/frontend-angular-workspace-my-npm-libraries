import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLumusitechSideMenuComponent } from './ngx-lumusitech-side-menu.component';

describe('NgxLumusitechSideMenuComponent', () => {
  let component: NgxLumusitechSideMenuComponent;
  let fixture: ComponentFixture<NgxLumusitechSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLumusitechSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLumusitechSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
