import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {

  events:Array<Event> = new Array<Event>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.events.push(new Event(0,"test1",new Date(),"Perpignan","Spectacle",0,true,0.0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38G3-M2GYNh9dp6KSzW0TRqy672nw0CfsnVFZHsP6_4Kr90Mm","blabla blab bla bla bla blab blabla blab bla bla bla blabblabla blab bla bla bla blab."));
    this.events.push(new Event(1,"test2",new Date(),"Montpellier","Spectacle",0,false,0.0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38G3-M2GYNh9dp6KSzW0TRqy672nw0CfsnVFZHsP6_4Kr90Mm","blabla blab bla bla bla blab blabla blab bla bla bla blabblabla blab bla bla bla blab."));
    this.events.push(new Event(2,"test3",new Date(),"Toulouse","Spectacle",0,true,0.0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38G3-M2GYNh9dp6KSzW0TRqy672nw0CfsnVFZHsP6_4Kr90Mm","blabla blab bla bla bla blab blabla blab bla bla bla blabblabla blab bla bla bla blab."));
  }

}
