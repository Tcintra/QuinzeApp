import { Event } from '../models/events.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { myFeedEvents } from "../../assets/events.json";

@Injectable()
export  class MyFeedService {
  constructor(private http: HttpClient) {}
  // Fetch data from events.json, we eventually want to hook this service
  // up to a database where user events are stored, and retrieve them with an
  // http get request
  getMyFeedEvents(): Event[] {
    return myFeedEvents;
  }
}
