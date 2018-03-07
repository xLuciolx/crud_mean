import { CoinService } from './../../coin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Coin';
  Aform : FormGroup;
  constructor(
    private coinservice: CoinService,
    private fb: FormBuilder
  ) { 
  }
  
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.Aform = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name, price){
    this.coinservice.addCoin(name, price);
  }

}
