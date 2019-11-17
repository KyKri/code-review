import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { FooterComponent } from './footer/footer.component';
import { AlgorithmsListComponent } from './algorithms-list/algorithms-list.component';
import { AlgorithmsDetailsComponent } from './algorithms-details/algorithms-details.component';

import { AlgorithmsService } from './algorithms.service';
import { AlgorithmNewComponent } from './algorithm-new/algorithm-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopicsListComponent,
    FooterComponent,
    AlgorithmsListComponent,
    AlgorithmsDetailsComponent,
    AlgorithmNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlgorithmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
