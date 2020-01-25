import { Component, OnInit } from '@angular/core';
import { GiftManagementService } from '../Service/gift-management.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-gift-panel',
  templateUrl: './gift-panel.component.html',
  styleUrls: ['./gift-panel.component.css']
})
export class GiftPanelComponent implements OnInit {

  myVar;

  constructor(
    public gms: GiftManagementService
  ) { }

  ngOnInit() {
    $('.ui.dropdown.giftlevel').dropdown();

  }

  newGift(str: string): void {

    //exit function while user cancel the action
    if(!confirm('Are you sure to new this item?'))
      return;

    // add new item
    this.gms.addGift($('.ui.dropdown.giftlevel').dropdown('get text'), str);
  }

  removeGift(itemNo: number): void {
    this.gms.getGiftList().splice(itemNo, 1);
  }

  startGift(): void{
    this.myVar = setInterval(function(){
    $('.ui.card').transition('bounce');
    }, 1000);

    setTimeout(() => {
      clearInterval(this.myVar);
      alert('congratulation 5');
    }, 5000);
  }
  stopGift(): void{
    clearInterval(this.myVar);
  }
}
