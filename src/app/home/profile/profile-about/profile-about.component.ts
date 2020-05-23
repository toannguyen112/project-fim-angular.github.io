import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-profile-about",
  templateUrl: "./profile-about.component.html",
  styleUrls: ["./profile-about.component.scss"],
})
export class ProfileAboutComponent implements OnInit {
  @Input("thongTinTaiKhoan") thongTinTaiKhoan;
  public user;
  public capNhatAvarta: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXT-MvunybNC8rfKP3k9axIiv4G8HRZIskEF5RZIRilJCvHnP-&usqp=CAU";
  constructor(private userService: UserService) {}
  ngOnInit() {
    let credentials = JSON.parse(localStorage.getItem("credentials"));
    this.user = credentials;
  }

  handleUpdateuser(userUpdate) {
    const userUpdateUpdate = {
      taiKhoan: this.user.taiKhoan,
      matKhau: userUpdate.matKhau,
      email: this.user.email,
      soDT: userUpdate.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: userUpdate.hoTen,
    };
    console.log(userUpdateUpdate);
    this.userService.updateUser(userUpdateUpdate).subscribe(
      (res) => {
        this.user = res;
        Swal.fire({
          title: "Cập nhật thành công",
          icon: "success",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
