import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../home/pizza.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.page.html',
  styleUrls: ['./previous-orders.page.scss'],
})

export class PreviousOrdersPage implements OnInit {
  previousOrders: OrderDetail[];
  historyEmpty = true ;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.previousOrders = this.homeService.getPreviousOrders();
    if(this.previousOrders.length>0){
      this.historyEmpty =false;
    }

  }

}

