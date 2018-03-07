import { CoinService } from './../../coin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = "Edit coin"
  coin: any
  Aform: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coinService: CoinService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(
      params => {
        this.coin = this.coinService.editCoin(params['id']).subscribe(
          res => {
            this.coin = res;
          }
        )
      }
    )
  }

  createForm(){
    this.Aform = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  updateCoin(name, price){
    this.route.params.subscribe(
      params => {
        this.coinService.updateCoin(name, price, params['id']);
        this.router.navigate(['index']);
      }
    )
  }
}
