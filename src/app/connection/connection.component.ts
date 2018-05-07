import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ConnectionBean } from '../connection-bean';
import { Observable } from 'rxjs';
import { Message } from 'primeng/components/common/api';
import { User } from '../user';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})

export class ConnectionComponent implements OnInit {

  msgs : Message[] = [];
  connectedUser : User;
  connectionBean : ConnectionBean = new ConnectionBean("","");

  model : ConnectionBean = new ConnectionBean("","");
  submitted = false;

  constructor(private connectionService : ConnectionService) 
  {
    this.connectionService = connectionService;
  }
  
  test : any;
  error : any;

  ngOnInit() {
  }

  onSubmit()
  {
    this.submitted = true;
    console.log("OnSubmit()");
    console.log(this.model);
    this.connectionService.connect(this.model).subscribe(
      data => 
      {
        console.log("success");
        this.showSucces();
        this.connectionBean = this.model;
        this.connectionBean.isConnected = true;
        this.test = {...data};
        this.connectionService.getUser(this.connectionBean).subscribe(user => this.connectedUser = user);
        console.log(this.connectedUser);
        sessionStorage.setItem('currentUser', JSON.stringify(this.connectedUser));
      },
      error => {
        console.error("Connection failed !");
        this.showFailure();
        this.model.password = "";
        return Observable.throw(error);});
    //this.model = new ConnectionBean("","");
    //this.connectionService.connect(this.model);
    //this.model = new ConnectionService();
  }

  showSucces()
  {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Connection Successful', detail:'Connection submitted'});
  }

  showFailure()
  {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Connection failed', detail:'Incorrect login or password'});
  }

}