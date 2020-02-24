import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule],
  exports: [CheckoutComponent]
})
export class CheckoutModule {}
