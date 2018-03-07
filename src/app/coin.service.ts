import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


const uri = 'http://localhost:4000';

@Injectable()
export class CoinService {

  constructor(
    private http: HttpClient
  ) { }

  addCoin(name, price){
    const coin = {
      name: name,
      price: price
    };

    this.http.post(uri + '/coins/add', coin).subscribe(res => console.log('Done')
    );
  }

  getCoins(){
    return this.http.get(uri + '/coins').map(
      res => {
        return res;
      }
    )
  }

  editCoin(id){
    return this.http.get(uri + '/coins/edit/' + id).map(
      res => {
        return res;
      }
    )
  }

  updateCoin(name, price, id){
    const coin = {
      name: name,
      price: price
    }
    return this.http.post(uri + '/coins/update/' + id, coin).subscribe( res => {
      console.log('Done');
      
    })
  }

  deleteCoin(id){
    return this.http.get(uri + '/coins/delete/' + id).map(
      res => {
        return res;
      }
    )
  }
}
