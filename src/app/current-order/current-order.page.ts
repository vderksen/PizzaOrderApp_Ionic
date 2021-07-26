import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../home/pizza.model';
import { HomeService } from '../home/home.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
})

export class CurrentOrderPage implements OnInit {
  orders: Pizza[];
  orderPrice: string;
  orderQuantity: string;

  constructor(private homeService: HomeService, private router: Router, private alertCtrl: AlertController) {}
  
  ngOnInit() {
    this.orders = this.homeService.getCurrentOrder();
    let total = this.homeService.getCurrentOrderSum();
    let qty = this.homeService.getCurrentOrderQty();
    this.orderPrice = total;
    this.orderQuantity = qty;
    console.log(this.orderPrice, this.orderQuantity);
  }

  // if there is at least one pizza in the order, Place the order
  async placeOrder() {
    if (this.orderPrice === '0' || this.orderQuantity === '0') {
      const alert = await this.alertCtrl.create({
        header: 'Not able to place the Oder',
        message: 'Please, add a Pizza to the Order',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            cssClass: 'secondary',
            handler: () => {
              this.router.navigate(['/menu']);
            },
          },
        ],
      });
      alert.present();
    }else{
    this.homeService.addToPreviousOrders(this.orderPrice, this.orderQuantity);
    this.homeService.resetCurrentOrder();
    this.orders=[];
    this.orderPrice= '0';
    this.orderQuantity= '0';
    const alert = await this.alertCtrl.create({
      header: 'Thank you!',
      message: 'Your order is placed',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/previous-orders']);
          },
        },
      ],
    });
    alert.present();
    }
  }

  // Delete pizza from the current order
  deleteOrder(order) {
    let total = 0;
    let qty = 0;
    this.homeService.removePizza(order);
    this.orders = this.homeService.getCurrentOrder();
    this.orders.forEach((element) => {
      total += Number(element.price);
      qty += Number(element.quantity);
    });
    this.orderPrice = total.toFixed(2);
    this.orderQuantity = qty.toString();
  }

}
