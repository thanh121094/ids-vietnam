import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { FinancesComponent } from './international-card/finances/finances.component';
import { FiltersComponent } from './international-card/filters/filters.component';
import { DataService } from './services/data.service';
import { ExcelService } from './services/excel.service';
import { AppRoutingModule } from './app-routing.module';
import { DomesticComponent } from './domestic/domestic.component';
import { AdminComponent } from './admin/admin.component';
import { InternationalCardComponent, DialogOverviewDialog } from './international-card/international-card.component';
import { FileManagementComponent } from './file-management/file-management.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FinancesComponent,
    FiltersComponent,
    InternationalCardComponent,
    DialogOverviewDialog,
    DomesticComponent,
    AdminComponent,
    FileManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    MatDatepickerModule,
    DataService,
    ExcelService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewDialog]
})
export class AppModule { }
