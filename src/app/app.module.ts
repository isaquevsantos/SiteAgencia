import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/bak/header/header.component';
import { FirtbannerComponent } from './components/firtbanner/firtbanner.component';
import { ImportaciamktComponent } from './components/importaciamkt/importaciamkt.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';
import { FormularioComponent } from './components/bak/formulario/formulario.component';
import { SliderComponent } from './components/slider/slider.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirtbannerComponent,
    ImportaciamktComponent,
    SobrenosComponent,
    FormularioComponent,
    SliderComponent,
    ServicosComponent,
    ContatoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
