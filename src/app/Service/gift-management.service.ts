import { Injectable } from '@angular/core';
import { Gift } from '../Model/gift';

@Injectable({
  providedIn: 'root'
})
export class GiftManagementService {

  giftlist: Gift[];
  constructor() { 
    //init
    this.giftlist = [
      new Gift('一等奖', '斯伯丁 篮球', "assets/basketball.jpg", 'Frank', '产困'),
      new Gift('二等奖', '迪卡侬 双肩包', 'assets/backbag.jpg', 'Frank', ''),
      new Gift('三等奖', '苏 F35 战斗机', 'assets/f35.jpg', 'Frank', ''),
      new Gift('一等奖', '索尼 无线蓝牙耳机 白色', 'assets/SBH24.jpg', 'Frank', ''),
    ];
  }

  getGiftList(): Gift[]{
    return this.giftlist;
  }

  addGift(level:string, desc: string): void{
    var gift: Gift = new Gift(level, desc, 'assets/default.jpg', '', '');

    this.giftlist.splice(0, 0, gift);

  }

}
