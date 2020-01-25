import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftPanelComponent } from './gift-panel/gift-panel.component';
import { GiftListComponent } from './gift-list/gift-list.component';
import { MemberPanelComponent } from './member-panel/member-panel.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomePanelComponent } from './home-panel/home-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftPanelComponent,
    GiftListComponent,
    MemberPanelComponent,
    MemberListComponent,
    HomePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
