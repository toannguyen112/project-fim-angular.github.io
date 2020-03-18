import { Film } from './../../../models/film';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-phim-sap-chieu',
  templateUrl: './item-phim-sap-chieu.component.html',
  styleUrls: ['./item-phim-sap-chieu.component.scss']
})
export class ItemPhimSapChieuComponent implements OnInit {
  @Input() itemPhim : Film;
  constructor() { }

  ngOnInit() {
  }

}
