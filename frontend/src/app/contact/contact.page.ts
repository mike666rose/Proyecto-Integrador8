import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  countrycode:string="593";

  whatsappnumber:string="991732953"

  url:string="https://wa.me/" + this.countrycode + this.whatsappnumber+"?text=Deseo obtener más información";
  constructor() { }

  ngOnInit() {
  }

}
