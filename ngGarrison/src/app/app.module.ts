import { GarrisonComponent } from './components/garrison/garrison.component';
import { GarrisonService } from './services/garrison.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, GarrisonComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  providers: [GarrisonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
