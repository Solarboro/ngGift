import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../Model/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  @Input() member: Member;
  constructor() { }

  ngOnInit() {
  }

}
