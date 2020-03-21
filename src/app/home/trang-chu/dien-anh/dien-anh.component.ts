import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dien-anh",
  templateUrl: "./dien-anh.component.html",
  styleUrls: ["./dien-anh.component.scss"]
})
export class DienAnhComponent implements OnInit {
  public news: any[] = [
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/bd24770fa902275cd5e1fcbdc504e660.jpg",
      moTa: "Jungle Cruise - Hé lộ cặp đôi mới của nhà Chuột"
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/nang-3-thu-ve-hon-10-ty-dong-sau-ngay-dau-cong-chieu-chinh-thuc-15836672298499.jpg",
      moTa: "Nắng 3 thu về hơn 10 tỷ đồng sau ngày đầu công chiếu chính thức"
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/922e2e34c5ea35ef1b05f77692a44396.jpg",
      moTa:
        "Candyman - Sát nhân thập 90 'hồi sinh', trở lại hoành tráng trong năm nay"
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2020/03/thai-lan-remake-cau-chuyen-tinh-kinh-dien-the-classic-voi-con-mua-tinh-dau-15832975897088.jpg",
      moTa: "Câu chuyện tình kinh điển The Classic trở lại màn ảnh rộng "
    }
  ];
  constructor() {}

  ngOnInit() {}
}
