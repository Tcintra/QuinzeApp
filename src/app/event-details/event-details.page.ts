import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss', '../app.component.scss'],
})
export class EventDetailsPage implements OnInit {

  private about: HTMLElement;
  private discussion: HTMLElement;
  private myRouter : Router;

  constructor(private router: Router) {
    this.myRouter = router;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.about = document.getElementById("about");
    this.discussion = document.getElementById("discussion");
  }

  segmentChanged(event) {
    const target: string = event.detail.value;

    if (target === "about") {
      this.about.style.display = "block";
      this.discussion.style.display = "none";
    } else {
      this.about.style.display = "none";
      this.discussion.style.display = "block";
    }
  }

  // Currently sends to myFeed on default,
  // later use ion-back-button and nav history
  // to send user to previous loc
  closePage() {
    this.myRouter.navigate(['/tabs/myFeed']);
  }
}
