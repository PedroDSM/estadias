import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';
import { animate, style, transition, trigger, keyframes } from'@angular/animations';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity:0}),
        animate('650ms',
        style({opacity: 1})
        )
      ]),
        transition(':leave', [
          style({opacity:1}),
          animate('650ms',
          style({opacity: 0})
          )
        ])
    ]),
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'}),
        ])
        )
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false
  screenWidth = 0
  navData= navbarData

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  close(): void{
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  ngOnInit(){
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 668){
      this.collapsed = false
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  constructor(private router: Router) { }

}
