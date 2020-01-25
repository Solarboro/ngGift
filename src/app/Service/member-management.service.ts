import { Injectable } from '@angular/core';
import { Member } from '../Model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberManagementService {

  private memberList: Member[] = [];
  constructor() {
    
    // this.memberList = [
    //   new Member('李灿坤', ''),
    //   new Member('李老猪', ''),
    //   new Member('李老虎', ''),
    //   new Member('李滋生', ''),
    //   new Member('李子涛', '')
    // ];
   }

   getMemberList(): Member[] {
     return this.memberList;
   }
}
