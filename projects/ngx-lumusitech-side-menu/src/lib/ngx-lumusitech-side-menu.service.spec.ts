import { TestBed } from '@angular/core/testing';

import { NgxLumusitechSideMenuService } from './ngx-lumusitech-side-menu.service';

describe('NgxLumusitechSideMenuService', () => {
  let service: NgxLumusitechSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLumusitechSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
