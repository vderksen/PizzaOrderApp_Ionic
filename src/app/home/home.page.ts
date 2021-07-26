import { Component } from '@angular/core';
import { PizzaSize, PizzaTopping } from './pizza.model';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  quantity: string;
  topping: string;
  size: string;
  sizePrice: string;
  pizzaPrice: string;
  pizzaToppings: PizzaTopping[];
  pizzaSizes: PizzaSize[];
  id: number;

  constructor(private homeService: HomeService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.pizzaToppings = this.homeService.getAllToppings(); // display list of pizza toppings
    this.pizzaSizes = this.homeService.getAllSizes(); // display list of pizza sizes

    // set the quantity, toppins and size labels to empty state
    this.quantity = "0"; 
    this.topping = "None"; 
    this.size = "None"; 
  }

  // Enter pizza quantity
  setQuantity(value: any) {
    this.quantity = value;
    console.log(this.quantity);
  }

  // Choose pizza topping from the toppings list
  selectTopping(value: any) {
    this.topping = value.name;
    console.log(this.topping);
  }

  // Choose pizza size from the sizes list
  selectSize(value: any) {
    this.size = value.name;
    this.sizePrice = value.price;
    console.log(this.size);
  }

  // Add Pizza to the Current Order
  async addOrder() {
    // check if user provided all pizza details
    if (this.quantity == "0" || this.topping == "None" || this.size == "None") {
      // if not, display alert message
      const alert = await this.alertCtrl.create({
        header: 'Order is incomplete',
        message: 'Please, choose the Pizza quantity, topping and size',
        buttons: ['OK'],
      });
      alert.present();
    } else {
      // if yes, calculate pizza price
      this.pizzaPrice = ((Number(this.sizePrice) * Number(this.quantity)).toFixed(2));
      // create new pizza object and add it to the current order array
      this.homeService.addPizza(this.id + 1, this.size, this.topping, this.quantity, this.pizzaPrice);
      // display alert message with order confirmation
      const alert = await this.alertCtrl.create({
        header: 'Success!!',
        message: `Your order has now ${this.homeService.getCurrentOrderQty()} Pizza,<br/>
                  and the total is ${this.homeService.getCurrentOrderSum()}`,
        buttons: ['OK'],
      });
      alert.present();
      this.resetOrder();
    }
  }

  // Reset Pizza details
  resetOrder() {
    this.quantity = "0";
    this.size = "None";
    this.topping = "None";
    this.pizzaPrice = null;
  }
}
