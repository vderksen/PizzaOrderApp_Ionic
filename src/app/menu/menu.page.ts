import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {}

  // Reset current order and navigate to home page
  newOrder(){
    this.homeService.resetCurrentOrder();
    this.router.navigate(['/home']);
  }

}
