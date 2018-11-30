import { SharedModule } from './shared/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { LoginModule } from './login';
import { AppComponent } from './core/containers/app';
import { CoreModule } from './core/index';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'taskmgr' }),
    TransferHttpCacheModule,
    SharedModule,
    LoginModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
