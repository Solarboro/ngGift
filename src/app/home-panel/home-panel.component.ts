import { Component, OnInit } from '@angular/core';
import { Gift } from '../Model/gift';
import { GiftManagementService } from '../Service/gift-management.service';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html',
  styleUrls: ['./home-panel.component.css']
})
export class HomePanelComponent implements OnInit {

  gift: Gift;
  constructor(
    public gms: GiftManagementService
  ) { }

  ngOnInit() {
  }

  view(): void {

    $('.ui.card').transition({
        animation : 'scale in',
        reverse   : 'auto', // default setting
        interval  : 200
      })
    ;
  }

}
