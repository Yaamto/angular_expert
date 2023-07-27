import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from './shared/shared.module';
import {StyleClassModule} from 'primeng/styleclass';
import { AuthModule } from './core/auth.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService,  { delay: 0 }),
    SharedModule,
    StyleClassModule,
    AuthModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
