import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyEventsPage } from './myEvents.page';

describe('MyEventsPage', () => {
  let component: MyEventsPage;
  let fixture: ComponentFixture<MyEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyEventsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
