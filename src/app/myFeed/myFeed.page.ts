import { Component, OnInit } from '@angular/core';

// Services
import { MyFeedService } from './myFeed.service';

// Interfaces
import { Event } from '../models/events.interface';

@Component({
  selector: 'app-myFeed',
  templateUrl: 'myFeed.page.html',
  styleUrls: ['myFeed.page.scss', '../app.component.scss']
})
export class MyFeedPage implements OnInit {
  // Renders content in My Feed Page
  myFeedEvents: Event[];
  constructor(private myFeedService: MyFeedService) {}
  // On init, fetch event data and display in DOM
  ngOnInit() {
    this.myFeedEvents = this.myFeedService.getMyFeedEvents();
    console.log(this.myFeedEvents);
  }

  // TODO: Implement goToProfile()
  goToProfile(event) {
    console.log(event);
  }
}
