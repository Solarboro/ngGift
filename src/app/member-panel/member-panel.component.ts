import { Component, OnInit } from '@angular/core';
import { MemberManagementService } from '../Service/member-management.service';
import { Member } from '../Model/member';
import { GiftManagementService } from '../Service/gift-management.service';

@Component({
  selector: 'app-member-panel',
  templateUrl: './member-panel.component.html',
  styleUrls: ['./member-panel.component.css']
})
export class MemberPanelComponent implements OnInit {

  private myInterval;
  private memberNo: number;
  constructor(
    public mms: MemberManagementService,
    public gms: GiftManagementService
  ) { }

  ngOnInit() {
  }

  newMember(name:string, phoneNo: string): void {
 

    this.mms.getMemberList().splice(0,0, new Member(name, phoneNo, ''));

  }

  removeMember(memberNo: number): void{
      if(!confirm(`Are you sure to remove ${this.mms.getMemberList()[memberNo].mName}`))
        return;

      this.mms.getMemberList().splice(memberNo, 1);
  }

  modal(memberNo: number): void{
    $('.ui.modal').modal('show');

    this.memberNo = memberNo;

    this.gameStart();
  }

  gameStart(): void{
    var itemNo: number = this.gms.getGiftList().length;
    var luckyNo: number = Math.floor( Math.random() * this.gms.getMaxLimit());
    var status: boolean = false;
    if (luckyNo < itemNo)
      status=true;
    
   this.myInterval = setInterval(
        function(){
          $('.ui.card').transition({
            animation : 'scale in',
            reverse   : 'auto', // default setting
            interval  : 200
          })
        ;
        }, 500
      );
    
    setTimeout(() => {
      clearInterval(this.myInterval);

      
    }, 5000);

    setTimeout(() => {
      if(status){

        console.log(luckyNo);
        if(!confirm(`恭喜 "${this.mms.getMemberList()[this.memberNo].mName}" 中了 "${this.gms.getGiftList()[luckyNo].desc}"\n确认颁奖？`))
          return;
          this.gms.getGiftList()[luckyNo].owner = this.mms.getMemberList()[this.memberNo].mName;
          this.gms.setGiftSpool(luckyNo);
      }
      else{
        alert('安慰奖');
      }

      $('.ui.modal').modal('hide');
    }, 8000);
  }

  closeModal(): void{
    $('.ui.modal').modal('hide');
;
  }
  
}
