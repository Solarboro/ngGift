import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberPanelComponent } from './member-panel/member-panel.component';
import { GiftPanelComponent } from './gift-panel/gift-panel.component';
import { HomePanelComponent } from './home-panel/home-panel.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePanelComponent },
  {path: 'gift', component: GiftPanelComponent },
  {path: 'member', component: MemberPanelComponent },
  {path: '**', redirectTo: 'gift'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
