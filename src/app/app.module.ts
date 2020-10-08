import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMathComponent } from './my-math/my-math.component';
import { LoggerService } from './shared/logger.service';
import { MyServiceCallingComponent } from './my-service-calling/my-service-calling.component';
import { MyMathHttpService } from './my-service-calling/my-math-http.service';
import { MyParentComponent } from './my-parent/my-parent.component';
import { MyChildComponent } from './my-child/my-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMathComponent,
    MyServiceCallingComponent,
    MyParentComponent,
    MyChildComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoggerService, MyMathHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
