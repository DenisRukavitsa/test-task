import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer">
               <p-toolbar>
                 <div class="ui-toolbar-group-center">
                   &copy; Donriver Inc. 2017. All Rights Reserved
                 </div>
               </p-toolbar>
             </div>`,
  styles: [`.footer {position: fixed;
                     left: 0;
                     bottom: 0;
                     width: 100%;
                     margin: 1px;
                     text-align: center;
                     font-size: x-small
           }`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
