import { Injectable } from '@angular/core';
import { PizzaSize, PizzaTopping, Pizza, OrderDetail} from './pizza.model';
import * as moment from 'moment'; // a date library for parsing, validating, manipulating, and formatting dates

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() {}

  private currentOrder: Pizza[] = new Array(); // create current order array for pizza objects
  private previousOrders: OrderDetail[] = new Array(); // create array of previous orders with orders details

  // Set list of toppings with initial values
  private toppings: PizzaTopping[] = [
    {
        id: "1",
        name: 'Tomato',
    },
    {
        id: "2",
        name: 'Bellpepper',
    },
    {
        id: "3",
        name: 'Pepperoni',
    },
    {
        id: "4",
        name: 'Mushroom',
    }
  ];

  // Set list of pizza sizes with initial values
  private sizes: PizzaSize[] = [
    {
        id: "1",
        name: 'Small',
        price: 10,
    },
    {
        id: "2",
        name: 'Medium',
        price: 12,
    },
    {
        id: "3",
        name: 'Large',
        price: 15,
    },
    {
        id: "4",
        name: 'Party',
        price: 20,
    }
  ];

  // Return All toppings
  getAllToppings() {
    return [...this.toppings];
  }

  // Return All sizes
  getAllSizes() {
    return [...this.sizes];
  }

  // Return topping by id
  getTopping(id: string) {
    return { ...this.toppings.find((topping) => topping.id === id) };
  }

  // Return pizza size by id
  getSize(id: string) {
    return { ...this.sizes.find((size) => size.id === id) };
  }

  // Add new pizza to the current order
  addPizza(i: number, s: string, t: string,  q: string, p: string) {
    let newPizza: Pizza = {
      id: i,
      size: s,
      topping: t,
      quantity: q,
      price: p,
    };
    this.currentOrder.push(newPizza);
    console.log(this.currentOrder);
  }
     
  // Return Current order
  getCurrentOrder() {
    return this.currentOrder;
  }

  // Return CurrentOrder total Sum
  getCurrentOrderSum(){
    let total = 0;
    this.currentOrder.forEach((element) => {
      total += Number(element.price);
    });
    return total.toFixed(2);
  }

    // Return CurrentOrder total Sum
  getCurrentOrderQty(){
    let qty = 0;
    this.currentOrder.forEach((element) => {
      qty += Number(element.quantity);
    });
    return qty.toFixed(0);
  }

  // Remove pizza from the current order
  removePizza(toRemove: Pizza) {
    this.currentOrder.forEach((element, index) => {
      if (element === toRemove) {
        this.currentOrder.splice(index, 1);
      }
    });
  }
  
  // Remove all pizzas from the curent order
  resetCurrentOrder() {
    this.currentOrder = [];
  }

  // Add order to History collection (previous orders)
  addToPreviousOrders(sum: string, qty: string) {
    const DATE_TIME_FORMAT = 'YYYY/MM/DD : hh:mm';
    let now: moment.Moment =  moment().utc();
    let t: OrderDetail = { orderDate: now.format(DATE_TIME_FORMAT), orderSum: sum, orderQty:  qty};
    this.previousOrders.push(t);
  }

  // Return Previous orders (orders history)
  getPreviousOrders() {
    return this.previousOrders;
  }


}
