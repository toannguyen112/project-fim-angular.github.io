import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-content',
  templateUrl: './checkout-content.component.html',
  styleUrls: ['./checkout-content.component.scss']
})
export class CheckoutContentComponent implements OnInit {
  @Input("thongTinPhim") thongTinPhim : any ;
  constructor() { }

  ngOnInit() {
  }

}
