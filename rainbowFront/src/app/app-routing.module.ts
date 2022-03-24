import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './rainbowcompany/Templates';
import { CadastrarFuncionarioComponent, AtribuirFuncionarioCargoComponent, EditarFuncionarioComponent, ExcluirFuncionarioComponent, ListaFuncionarioComCargoComponent, ListaFuncionarioComponent, ListaFuncionariosDoCargoComponent} from './rainbowcompany/views/Funcionario';
import { CadastroCargoComponent, EditarCargoComponent, ExcluirCargoComponent, ListaCargoComponent } from './rainbowcompany/views/Cargo';
import { ListaSupervisorComponent, SupervisorDoCargoComponent, CadastrarSupervisorComponent, AtribuirCargoComponent, ListaCardSupervisorComponent, EditarSupervisorComponent, ExcluirSupervisorComponent } from './rainbowcompany/views/Supervisor';
import { CadastroFolhaComponent, EdicaoFolhaComponent, ExclusaoFolhaComponent, ListaFolhaFuncionarioComponent } from './rainbowcompany/views/Folha';


const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "cargo", component:ListaCargoComponent},
  {path: "cadastroCargo", component:CadastroCargoComponent},
  {path: "editarCargo/:id_cargo", component:EditarCargoComponent},
  {path: "deletarCargo/:id_cargo", component:ExcluirCargoComponent},
  {path: "funcionario/lista", component:ListaFuncionarioComponent},
  {path: "funcionarioCadastro", component:CadastrarFuncionarioComponent},
  {path: "funcionarioEditar/:id_func", component:EditarFuncionarioComponent},
  {path: "funcionarioExcluir/:id_func", component:ExcluirFuncionarioComponent},
  {path: "funcionarioComCargo", component:ListaFuncionarioComCargoComponent},
  {path: "funcionario/listaDoCargo/:id_cargo", component:ListaFuncionariosDoCargoComponent},
  {path: "funcionario/atrubuirCargo/:id_func/:id_cargo", component:AtribuirFuncionarioCargoComponent},
  {path: "supervisor/listaSupervisor", component:ListaSupervisorComponent},
  {path: "supervisor/cadastroSupervisor", component: CadastrarSupervisorComponent},
  {path: "supervisor/atribuirCargo/:id_super", component: AtribuirCargoComponent},
  {path: "supervisor/card-supervisor", component:ListaCardSupervisorComponent},
  {path: "supervisor/supervisorDoCargo/:id_cargo", component:SupervisorDoCargoComponent},
  {path: "supervisor/editar-supervisor/:id_super", component:EditarSupervisorComponent},
  {path: "supervisor/excluir-supervisor/:id_super/:id_cargo", component:ExcluirSupervisorComponent},
  {path: "folha/cadastro/:id_func", component:CadastroFolhaComponent},
  {path: "folha/listaPorFuncionario/:id_func", component: ListaFolhaFuncionarioComponent},
  {path: "folha/edicao/:codigoFolha/:id_func", component: EdicaoFolhaComponent},
  {path: "folha/exclusao/:codigoFolha/:id_func", component: ExclusaoFolhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
