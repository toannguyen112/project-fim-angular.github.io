import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  maPhim: string;
  tenPhim: string;
  hinhAnh: string;
  moTa: string;
  ngayChieu: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    maPhim: "1",
    tenPhim: "Hydrogen",
    hinhAnh: "1.0079",
    moTa: "toan nguyen",
    ngayChieu: "H"
  },
  {
    maPhim: "1",
    tenPhim: "Hydrogen",
    hinhAnh: "1.0079",
    moTa: "toan nguyen",
    ngayChieu: "H"
  }
];
@Component({
  selector: 'app-quanliphim-content',
  templateUrl: './quanliphim-content.component.html',
  styleUrls: ['./quanliphim-content.component.scss']
})
export class QuanliphimContentComponent implements OnInit {
  displayedColumns: string[] = [
    "maPhim",
    "tenPhim",
    "hinhAnh",
    "moTa",
    "ngayChieu"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
