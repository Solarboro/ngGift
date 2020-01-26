import { Injectable } from '@angular/core';
import { Member } from '../Model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberManagementService {

  private memberList: Member[] = [];

  constructor() {
    
    this.memberList = [
      new Member('李灿坤', '136 **** ****', ''),
      new Member('李老虎', '136 **** ****', ''),
      // new Member('李滋生', '136 **** ****', ''),
      new Member('李老猪', '136 **** ****', ''),
      // new Member('李子涛', '136 **** ****', '')
    ];
   }

   getMemberList(): Member[] {
     return this.memberList;
   }
}
