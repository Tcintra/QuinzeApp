import { Component } from '@angular/core';

@Component({
  selector: 'app-myProfile',
  templateUrl: 'myProfile.page.html',
  styleUrls: ['myProfile.page.scss', '../app.component.scss']
})
export class MyProfilePage {

  private current: HTMLElement;
  private past: HTMLElement;

  ionViewWillEnter() {
    this.current = document.getElementById("current-events");
    this.past = document.getElementById("past-events");
  }

  segmentChanged(event) {
    const target: string = event.detail.value;

    if (target === "current") {
      this.current.style.display = "block";
      this.past.style.display = "none";
    } else {
      this.current.style.display = "none";
      this.past.style.display = "block";
    }
  }

  constructor() {}

}
