import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostEventPage } from './postEvent.page';

describe('postEventPage', () => {
  let component: PostEventPage;
  let fixture: ComponentFixture<PostEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostEventPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
