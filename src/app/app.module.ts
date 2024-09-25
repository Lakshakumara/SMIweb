import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserguideComponent } from './userguide/userguide.component';
import { NewsComponent } from './news/news.component';
import { SourcecodeComponent } from './sourcecode/sourcecode.component';

@NgModule({
  declarations: [
    AppComponent,
    UserguideComponent,
    NewsComponent,
    SourcecodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
