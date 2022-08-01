import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiDirection } from './multidirection/multi.module';
import { ParentChild } from './parent/parent.module';
import { Siblings } from './siblings/siblings.module';
import { UnrelateModule } from './unrelated/unrelate.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UnrelateModule,
    MultiDirection,
    ParentChild,
    Siblings,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
