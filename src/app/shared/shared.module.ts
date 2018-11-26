import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule
];

const MODULES = [
  // ...MATERIAL_MODULES,
  CommonModule,
];
const DECLARATIONS = [];
const EXPORT_COMPONENTS = [];
const ENTRYCOMPONENTS = [];


@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
    ...EXPORT_COMPONENTS
  ],
  declarations: DECLARATIONS,
  entryComponents: [
    ENTRYCOMPONENTS
  ]
})
export class SharedModule { }
