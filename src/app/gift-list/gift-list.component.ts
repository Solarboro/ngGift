import { Component, OnInit, Input } from '@angular/core';
import { Gift } from '../Model/gift';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  @Input() gift: Gift;
  constructor() { }

  ngOnInit() {
    
  }

}
