import { Router } from '@angular/router';
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
    private coinService: CoinService,
    private router: Router
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

  deleteCoin(id){
    this.coinService.deleteCoin(id).subscribe(
      res => {
        console.log('Deleted');
        location.reload();
        
      }
    )
  }
}
