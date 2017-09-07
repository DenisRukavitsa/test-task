import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  menuItems: MenuItem[];
  messages: Message[];

  constructor() {
    const menuItemClicked = (event) => {
      this.messages = [{
        severity: 'info',
        summary: 'Info',
        detail: `${event.item.label} menu item is clicked`
      }];
    };

    this.menuItems = [{
      // label: 'Menu',
      items: [
        {label: 'NBN ISP Report',
         command: menuItemClicked},
        {label: 'DSL ISP Report',
         command: menuItemClicked},
        {label: 'Configuration',
         command: menuItemClicked}
      ]
    }];
  }

  ngOnInit() {
  }

}
