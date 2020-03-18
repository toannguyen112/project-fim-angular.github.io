import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-item-phim-dang-chieu',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() itemPhim : Film;
  constructor() { }

  ngOnInit() {
  }

}
