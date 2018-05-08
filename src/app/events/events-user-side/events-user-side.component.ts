import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../event';

@Component({
  selector: 'app-events-user-side',
  templateUrl: './events-user-side.component.html',
  styleUrls: ['./events-user-side.component.css']
})
export class EventsUserSideComponent implements OnInit {

  model:Event = new Event("",null,null,null,0,0,"",null,false, "", "");
  @Input()
  events:Array<Event> = new Array<Event>();
  constructor() { }

  ngOnInit() {
  }

}