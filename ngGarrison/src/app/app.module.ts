import { GarrisonService } from './services/garrison.service';
import { GarrisonComponent } from './components/garrison/garrison.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [AppComponent, GarrisonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [GarrisonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
