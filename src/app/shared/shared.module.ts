import { NgModule } from "@angular/core";
import { TableComponent } from "./components/table/table.component";
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  declarations: [TableComponent],
  imports: [CdkTableModule],
  exports: [TableComponent],
})
export class SharedModule {}
