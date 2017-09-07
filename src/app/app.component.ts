import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
               <app-header></app-header>
               <app-navigator></app-navigator>
               <app-tabs></app-tabs>
               <app-footer></app-footer>
             </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
