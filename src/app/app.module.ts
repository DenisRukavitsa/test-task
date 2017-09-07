import { DateService } from './date.service/date.service';
import { EmployeeService } from './employee/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConfirmDialogModule,
         ButtonModule,
         MenuModule,
         GrowlModule,
         PanelModule,
         TabViewModule,
         DataTableModule,
         ToolbarModule,
         DialogModule,
         InputTextModule,
         ContextMenuModule
       } from 'primeng/primeng';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TabsComponent } from './tabs/tabs.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    TabsComponent,
    DataTableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ConfirmDialogModule,
    ButtonModule,
    MenuModule,
    GrowlModule,
    PanelModule,
    TabViewModule,
    DataTableModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    ContextMenuModule
  ],
  providers: [EmployeeService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
