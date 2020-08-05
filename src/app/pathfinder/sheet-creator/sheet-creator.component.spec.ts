import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCreatorComponent } from './sheet-creator.component';

describe('SheetCreatorComponent', () => {
  let component: SheetCreatorComponent;
  let fixture: ComponentFixture<SheetCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
