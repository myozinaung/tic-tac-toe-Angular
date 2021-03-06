import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { ThrusterComponent } from './thruster/thruster.component';
import { RollPitchComponent } from './roll-pitch/roll-pitch.component';
import { RudderComponent } from './rudder/rudder.component';
import { TestComponent } from './test/test.component';
import { InstumentsComponent } from './instuments/instuments.component';
import { HdgComponent } from './hdg/hdg.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { DimmingMenuComponent } from './top-navbar/dimming-menu/dimming-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ThrusterComponent,
    RollPitchComponent,
    RudderComponent,
    TestComponent,
    InstumentsComponent,
    HdgComponent,
    TopNavbarComponent,
    DimmingMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // MYO
})
export class AppModule {}
