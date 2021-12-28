import { DataService } from './common/data.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ControlFormComponent } from './control-form/control-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostscomponentComponent } from './postscomponent/postscomponent.component';
import {PostService} from './service/post.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    ZippyComponent,
    ControlFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostscomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService, DataService, {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
