import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyFeedPage } from './myFeed.page';

describe('MyFeedPage', () => {
  let component: MyFeedPage;
  let fixture: ComponentFixture<MyFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFeedPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
