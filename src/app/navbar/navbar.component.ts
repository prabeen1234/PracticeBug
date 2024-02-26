import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleNav(){
    const navLinks = document.querySelector('.nav-links');
    navLinks!.classList.toggle('show');
  }
}
