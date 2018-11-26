import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from './my-material/my-material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: []
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
  }
}
