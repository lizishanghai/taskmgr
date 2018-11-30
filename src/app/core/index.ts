import { AppEffectsModule } from './../effects/index';
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
import { RouterStateSerializer } from '@ngrx/router-store';

import { SharedModule } from '../shared/index';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './containers/app';
import { SidebarComponent } from './components/sidebar';
import { HeaderComponent } from './components/header';
import { PageNotFoundComponent } from './containers/page-not-found';

import { loadSvgResources } from '../utils/svg.util';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from '../services';
import { AppStoreModule } from '../reducers';
import { CustomRouterStateSerializer } from '../utils/router.util';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AppEffectsModule,
    ServicesModule.forRoot(),
    AppStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: { uri: 'http://localhost:3002' } },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
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
