import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRoomComponent } from './basic-room.component';

describe('BasicRoomComponent', () => {
  let component: BasicRoomComponent;
  let fixture: ComponentFixture<BasicRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
