import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DataTableModule} from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DataGridModule,
    TableModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [],
  declarations: [],
  exports: [
    DataTableModule,
    DataGridModule,
    TableModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    ButtonModule
  ],
})
export class SharedModule {
}
