import { Injectable } from '@angular/core';
import { Gift } from '../Model/gift';
import { MemberManagementService } from './member-management.service';

@Injectable({
  providedIn: 'root'
})
export class GiftManagementService {

  giftlist: Gift[];
  public giftspool: Gift[] = [];
  public maxLimit: number = 5;
  constructor(
    public mms: MemberManagementService
  ) { 
    //灿坤
    //老猪
    //老虎

    this.giftspool = [
      new Gift('特等奖', '红包 200', 'assets/default.jpg', '鹏强', '老猪'),
      new Gift('一等奖', '索尼 无线蓝牙耳机 白色', 'assets/SBH24.jpg', '鹏强', '灿坤'),
      new Gift('一等奖', '王者荣耀 710 点券', "assets/wz710.jpg", '梓生', '老虎'),
      new Gift('一等奖', '斯伯丁 篮球', "assets/basketball.jpg", '鹏强', '灿坤'),
      new Gift('二等奖', '迪卡侬 双肩包', 'assets/backbag.jpg', '鹏强', '灿坤'),
      new Gift('二等奖', '王者荣耀 288 点券', 'assets/wz288.jpg', '梓生', '灿坤'),
      new Gift('二等奖', '红包 50元', 'assets/hb50.jpg', '鹏强', '灿坤'),
      new Gift('三等奖', '王者荣耀 90 点券', 'assets/default.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/xuebi.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/xuebi.jpg', '梓生', '老虎'),
      new Gift('三等奖', '苏 F35 战斗机', 'assets/f35.jpg', '鹏强', '灿坤'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '灿坤'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '灿坤'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老猪'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老虎'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老猪'),
      new Gift('--', '--', 'assets/default.jpg', '鹏强', '')
      
      
    ];
    //init
    this.giftlist= [
      new Gift('特等奖', '红包 200', 'assets/default.jpg', '鹏强', '老猪'),
      new Gift('一等奖', '索尼 无线蓝牙耳机 白色', 'assets/SBH24.jpg', '鹏强', '灿坤'),
      new Gift('一等奖', '王者荣耀 710 点券', "assets/wz710.jpg", '梓生', '老虎'),
      new Gift('一等奖', '斯伯丁 篮球', "assets/basketball.jpg", '鹏强', '灿坤'),
      new Gift('二等奖', '迪卡侬 双肩包', 'assets/backbag.jpg', '鹏强', '灿坤'),
      new Gift('二等奖', '王者荣耀 288 点券', 'assets/wz288.jpg', '梓生', '灿坤'),
      new Gift('二等奖', '红包 50元', 'assets/hb50.jpg', '鹏强', '灿坤'),
      new Gift('三等奖', '王者荣耀 90 点券', 'assets/default.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/xuebi.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '老虎'),
      new Gift('三等奖', '可乐/雪碧', 'assets/xuebi.jpg', '梓生', '老虎'),
      new Gift('三等奖', '苏 F35 战斗机', 'assets/f35.jpg', '鹏强', '灿坤'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '灿坤'),
      new Gift('三等奖', '可乐/雪碧', 'assets/ccl.jpg', '梓生', '灿坤'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老猪'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老虎'),
      new Gift('安慰奖', '王者荣耀 10 点券', 'assets/default.jpg', '梓生', '老猪'),
      new Gift('安慰奖', '再接再厉', 'assets/default.jpg', '梓生', '')
    ];
  }

  getGiftList(): Gift[]{
    return this.giftlist;
  }

  addGift(level:string, desc: string): void{
    var gift: Gift = new Gift(level, desc, 'assets/default.jpg', '', '');

    this.giftlist.splice(0, 0, gift);

  }

  setOwner(giftNo: number): void{
    console.log(this.mms.getMemberList().length);
    var owner: number = Math.floor(Math.random() * this.mms.getMemberList().length);
    if(!confirm(`恭喜 “${this.mms.getMemberList()[owner].mName}” 获得奖品 “${this.getGiftList()[giftNo].desc}”\n  确认颁发？` ))
      return;
    this.getGiftList()[giftNo].owner = this.mms.getMemberList()[owner].mName;
  }

  setGiftSpool(itemNo: number): void{
    this.giftspool.splice(0, 0, this.giftlist[itemNo]);
    this.giftlist.splice(itemNo, 1);
  }

  getMaxLimit(): number{
    return this.maxLimit--;
  }

}
