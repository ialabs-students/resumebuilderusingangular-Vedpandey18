import { Component } from '@angular/core';
import { Menu } from '../../model/Menus';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuLogin: string = "Login";
  home: string = "Home";
  report:string ="Report"

  services: string = "Services";
  menus: Menu[] = [];
  object: any = { 
    a: 12,
    b: 13,
    c: 14
  }
  constructor() { }

  getMenus() {
    return this.menus;
  }

}


//binding (b/w .ts file and .html file)

