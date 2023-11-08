import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirtbannerComponent } from './components/firtbanner/firtbanner.component';
import { ImportaciamktComponent } from './components/importaciamkt/importaciamkt.component';
import { DepoimentosComponent } from './components/depoimentos/depoimentos.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirtbannerComponent,
    ImportaciamktComponent,
    DepoimentosComponent,
    SobrenosComponent,
    FormularioComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
