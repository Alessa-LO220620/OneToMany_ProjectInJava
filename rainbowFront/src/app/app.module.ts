import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent, HeaderComponent, FooterComponent  } from './rainbowcompany/Templates/index'
import { CadastroCargoComponent, EditarCargoComponent, ExcluirCargoComponent, ListaCargoComponent} from './rainbowcompany/views/Cargo/index'
import { CadastrarFuncionarioComponent, EditarFuncionarioComponent, ExcluirFuncionarioComponent, ListaFuncionarioComponent, ListaFuncionarioComCargoComponent, ListaFuncionariosDoCargoComponent, AtribuirFuncionarioCargoComponent} from './rainbowcompany/views/Funcionario/index';
import { ListaSupervisorComponent, SupervisorDoCargoComponent, CadastrarSupervisorComponent, AtribuirCargoComponent, ListaCardSupervisorComponent, EditarSupervisorComponent, ExcluirSupervisorComponent} from './rainbowcompany/views/Supervisor/index';
import { ListaFolhaFuncionarioComponent, CadastroFolhaComponent, EdicaoFolhaComponent, ExclusaoFolhaComponent } from './rainbowcompany/views/Folha/index';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaCargoComponent,
    CadastroCargoComponent,
    EditarCargoComponent,
    ExcluirCargoComponent,
    ListaFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
    ExcluirFuncionarioComponent,
    ListaSupervisorComponent,
    CadastrarSupervisorComponent,
    AtribuirCargoComponent,
    ListaCardSupervisorComponent,
    EditarSupervisorComponent,
    ExcluirSupervisorComponent,
    ListaFolhaFuncionarioComponent,
    CadastroFolhaComponent,
    EdicaoFolhaComponent,
    ExclusaoFolhaComponent,
    ListaFuncionariosDoCargoComponent,
    ListaFuncionarioComCargoComponent,
    SupervisorDoCargoComponent,
    AtribuirFuncionarioCargoComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
