import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  public isHomeSelected = true;
  public isExploreSelected = false;
  public isPostSelected = false;
  public isMyEventsSelected = false;
  public isProfileSelected = false;

  public selectHome() {
    this.isHomeSelected = true;
    this.isExploreSelected = false;
    this.isPostSelected = false;
    this.isMyEventsSelected = false;
    this.isProfileSelected = false;
  }

  public selectExplore() {
    this.isHomeSelected = false;
    this.isExploreSelected = true;
    this.isPostSelected = false;
    this.isMyEventsSelected = false;
    this.isProfileSelected = false;
  }

  public selectPost() {
    this.isHomeSelected = false;
    this.isExploreSelected = false;
    this.isPostSelected = true;
    this.isMyEventsSelected = false;
    this.isProfileSelected = false;
  }

  public selectMyEvents() {
    this.isHomeSelected = false;
    this.isExploreSelected = false;
    this.isPostSelected = false;
    this.isMyEventsSelected = true;
    this.isProfileSelected = false;
  }

  public selectProfile() {
    this.isHomeSelected = false;
    this.isExploreSelected = false;
    this.isPostSelected = false;
    this.isMyEventsSelected = false;
    this.isProfileSelected = true;
  }

}
