import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cinema-page',
  templateUrl: './detail-cinema-page.component.html',
  styleUrls: ['./detail-cinema-page.component.scss']
})
export class DetailCinemaPageComponent implements OnInit {

  loai: string = "lichchieu";
  constructor() {}

  ngOnInit() {}

  chonLoai(loai: string) {
    this.loai = loai;
  }
}
