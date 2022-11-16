import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { PictureDetailComponent } from './component/picture-detail/picture-detail.component';
import { PictureEditComponent } from './component/picture-edit/picture-edit.component';
import { PictureUpComponent } from './component/picture-up/picture-up.component';

const routes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: 'app-main', component: MainComponent },
  { path: 'view-pic', component: PictureDetailComponent },
  { path: 'up-pic', component: PictureUpComponent },
  { path: 'edit-pic', component: PictureEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
