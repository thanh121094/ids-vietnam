import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternationalCardComponent }   from './international-card/international-card.component';
import { DomesticComponent }   from './domestic/domestic.component';
import { AdminComponent }   from './admin/admin.component';
import { FileManagementComponent }   from './file-management/file-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/international-card', pathMatch: 'full' },
  { path: 'international-card', component: InternationalCardComponent },
  { path: 'domestic', component: DomesticComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'file-management', component: FileManagementComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
