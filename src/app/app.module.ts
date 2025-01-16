import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConnectUsComponent } from './connect-us/connect-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeProvideComponent } from './we-provide/we-provide.component';
import { DemoProjectComponent } from './demo-project/demo-project.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConnectUsComponent,
    NavbarComponent,
    WeProvideComponent,
    DemoProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
