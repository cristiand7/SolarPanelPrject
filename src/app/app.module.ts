import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { HomeComponent } from './home/home.component';
import { ReporteComponent } from './reporte/reporte.component';


import {MatTableModule} from '@angular/material/table'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent,
    HomeComponent,
    ReporteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'menu', component: HomeComponent},
      {path: 'report', component: ReporteComponent},
      {path: 'graphic', component: GraficaComponent},
      {path: '', redirectTo: '/menu', pathMatch: 'full'},
    ]),
    HttpClientModule ,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
