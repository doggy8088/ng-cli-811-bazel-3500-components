import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1312Component } from './page1312.component';

@NgModule({
  declarations: [Page1312Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1312Component }])],
  exports: [Page1312Component]
})
export class Page1312Module {}
