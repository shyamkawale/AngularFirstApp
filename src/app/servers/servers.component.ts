import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isServerDisabled = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  
  constructor(){
    setTimeout(() => {
      this.isServerDisabled = false;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = `Server is created, name is ${this.serverName}`;
  }

  //for one way data binding
  // onUpdateServerName(event: any){
  //   this.serverName = event.target.value;
  // }
}
