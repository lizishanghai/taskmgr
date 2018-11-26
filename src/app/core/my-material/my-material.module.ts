import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
} from '@angular/material';

/**
 * NgModule that includes all Material modules.
 */

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
  ]
})
export class MyMaterialModule { }
