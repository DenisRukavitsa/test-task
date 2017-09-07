import { DateService } from '../date.service/date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  header: string;

  constructor(private dateService: DateService) {
    const date = this.dateService.getTodaysDate();
    this.header = `ISP National APHT Report: ${date}`;
  }

  ngOnInit() {
  }

}
