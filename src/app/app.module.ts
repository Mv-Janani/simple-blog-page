import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{FormsModule,Rea
// }
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule}from'@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
