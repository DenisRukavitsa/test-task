import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`.header {border-bottom-width: 0.1rem;
                     border-bottom-style: solid;
                     border-bottom-color: rgb(229, 229, 229);}`],
  providers: [ConfirmationService]
})
export class HeaderComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  logout() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to sign out? The current tab will be closed.',
      header: 'Confirm',
      accept: () => {
        window.close();
      }
    });
  }

}
