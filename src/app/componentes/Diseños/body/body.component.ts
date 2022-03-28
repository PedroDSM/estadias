import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string{
    let styleClass = ' ';
    if(this.collapsed && this.screenWidth > 668 ){
      styleClass = 'body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 668 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
