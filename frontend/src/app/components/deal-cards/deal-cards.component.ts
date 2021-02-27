import { Component, OnInit } from '@angular/core';
import { DealCardsService } from './deal-cards.service';

@Component({
  selector: 'app-deal-cards',
  templateUrl: './deal-cards.component.html',
  styleUrls: ['./deal-cards.component.scss'],
})
export class DealCardsComponent implements OnInit {
  constructor(private dealCardsService: DealCardsService) {}

  ngOnInit(): void {
    this.dealCardsService.getUserCard();
  }
}
