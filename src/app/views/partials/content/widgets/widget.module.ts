import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget4Component } from './widget4/widget4.component';
import { Widget14Component } from './widget14/widget14.component';
import { Timeline2Component } from './timeline2/timeline2.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget4Component,
		Widget14Component,
		Timeline2Component,
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget4Component,
		Widget14Component,
		Timeline2Component,
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
	]
})
export class WidgetModule {
}
