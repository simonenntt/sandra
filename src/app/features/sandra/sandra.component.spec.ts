import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandraComponent } from './sandra.component';

describe('SandraComponent', () => {
  let component: SandraComponent;
  let fixture: ComponentFixture<SandraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
