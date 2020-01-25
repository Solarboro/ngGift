import { Component, OnInit } from '@angular/core';
import { MemberManagementService } from '../Service/member-management.service';

@Component({
  selector: 'app-member-panel',
  templateUrl: './member-panel.component.html',
  styleUrls: ['./member-panel.component.css']
})
export class MemberPanelComponent implements OnInit {

  constructor(
    public mms: MemberManagementService
  ) { }

  ngOnInit() {
  }

}
