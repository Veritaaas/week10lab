import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmoviebyyearComponent } from './listmoviebyyear.component';

describe('ListmoviebyyearComponent', () => {
  let component: ListmoviebyyearComponent;
  let fixture: ComponentFixture<ListmoviebyyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmoviebyyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmoviebyyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
