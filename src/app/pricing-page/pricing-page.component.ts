import { Component, OnInit } from '@angular/core';

interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  priceTable: IPriceItem[] = [
    {
      name: 'Free', 
      price: 0, options: 
      ['10 tanuló', '2GB tárhely', 'Email támogatás', 'Dokumentáció'], 
      btnText: 'Ingyenes regisztráció'
    },
    {
      name: 'Pro', 
      price: 15, options: 
      ['20 tanuló', '10 GB tárhely', 'Kiemelt email támogatás', 'Dokumentáció'], 
      btnText: 'Kezdő lépések'
    },
    {
      name: 'Enterprise', 
      price: 29, options: 
      ['100 tanuló', '100 GB tárhely', 'Telefonos és email támogatás', 'Dokumentáció'], 
      btnText: 'Kontakt'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    document.querySelectorAll('.card-deck .card .card-body button.btn.btn-lg.btn-block.btn-outline-primary')
      .forEach((e, i) => !i || (e.classList.replace('btn-outline-primary', 'btn-primary')));
  }

}
