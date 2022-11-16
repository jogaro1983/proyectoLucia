import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureDetailComponent } from './component/picture-detail/picture-detail.component';
import { MainComponent } from './component/main/main.component';
import { PictureUpComponent } from './component/picture-up/picture-up.component';
import { PictureEditComponent } from './component/picture-edit/picture-edit.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PictureDetailComponent,
    MainComponent,
    PictureUpComponent,
    PictureEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
