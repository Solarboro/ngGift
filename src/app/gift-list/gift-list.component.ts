import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../Model/gift';
import { GiftManagementService } from '../Service/gift-management.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  @Input() gift: Gift;
  @Input() giftNo: number;
  constructor(
    public gms: GiftManagementService
  ) { }

  ngOnInit() {
    
  }

  gameStart(): void{
    this.gms.setOwner(this.giftNo);
  }

}
