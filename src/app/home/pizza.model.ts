export interface PizzaSize {
  id: string;
  name: string;
  price: number;
} 

export interface PizzaTopping {
  id: string;
  name: string;
}

export interface Pizza {
  id : number;
  size: string;
  topping: string;
  quantity: string;
  price: string;
}

export interface OrderDetail {
  orderDate: string;
  orderSum: string;
  orderQty: string;
}



