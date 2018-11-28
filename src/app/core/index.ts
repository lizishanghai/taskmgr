import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconRegistry,
  // DateAdapter,
  // MAT_DATE_FORMATS,
  // MatDatepickerIntl,
  // MAT_DATE_LOCALE
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedModule } from '../shared/index';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './containers/app';
import { SidebarComponent } from './components/sidebar';
import { HeaderComponent } from './components/header';
import { PageNotFoundComponent } from './containers/page-not-found';

import { loadSvgResources } from '../utils/svg.util';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    AppComponent
  ],
  exports: [
    AppComponent, AppRoutingModule
  ],
})
export class CoreModule {

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    ) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
     loadSvgResources(iconRegistry, sanitizer);
  }
}
