import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loGin : boolean  = false ;
  @Output("emitLogin") emitLogin = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  login(e){
    console.log(e);
      this.loGin = e;
      this.emitLogin.emit(this.loGin)
  
    
  }

}
