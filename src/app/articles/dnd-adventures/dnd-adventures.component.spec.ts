import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndAdventuresComponent } from './dnd-adventures.component';

describe('DndAdventuresComponent', () => {
  let component: DndAdventuresComponent;
  let fixture: ComponentFixture<DndAdventuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DndAdventuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DndAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
