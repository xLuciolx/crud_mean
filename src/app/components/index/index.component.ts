import { CoinService } from './../../coin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  coins: any;

  constructor(
    private http: HttpClient,
    private coinService: CoinService
  ) { }

  ngOnInit() {
    this.getCoins();
  }

  getCoins(){
    this.coinService.getCoins().subscribe(
      res => {
        this.coins = res;
      }
    );
  }
}
