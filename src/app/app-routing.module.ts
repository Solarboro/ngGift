import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberPanelComponent } from './member-panel/member-panel.component';
import { GiftPanelComponent } from './gift-panel/gift-panel.component';


const routes: Routes = [
  // {path: '', redirectTo: 'gift', pathMatch: 'full'},
  {path: 'gift', component: GiftPanelComponent },
  {path: 'member', component: MemberPanelComponent },
  {path: '**', redirectTo: 'gift'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
