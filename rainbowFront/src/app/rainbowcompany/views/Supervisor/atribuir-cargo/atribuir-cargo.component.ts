import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-atribuir-cargo',
  templateUrl: './atribuir-cargo.component.html',
  styleUrls: ['./atribuir-cargo.component.css']
})
export class AtribuirCargoComponent implements OnInit {

  id_super: any
  cargoSemSupervisor: any
  cargoSemSupervisorEscolhido: any = []
  supervisorSemCargoEscolhido: any = []


  supervisor: Supervisor = {
    id_super: " ",
    super_nome: " ",
    super_formacao: " ",
    super_foto: " "
  }

  cargo: Cargo = {
    id_cargo: "",
    cargo_nome: "",
    cargo_descricao: "",
    cargo_setor: ""
  }

  constructor(private supervisorService: SupervisorService,
    private route: ActivatedRoute,
    private router: Router,
    private cargoService: CargoService) { }

  ngOnInit(): void {
    this.id_super = this.route.snapshot.paramMap.get('id_super')
    this.showSupervisor()
    this.showSupervisorOfPosition()
    this.showPositionWithoutSupervisor()
  }

  showSupervisor() {
    this.supervisorService.showOneSupervisor(this.id_super).subscribe(res => {
      this.supervisor = res;
    })
  }

  showSupervisorOfPosition() {
    this.cargoService.showPositionOfSupervisor(this.id_super).subscribe(res => {

      if (res == null) {
        alert("Não está difinido um cargo para esse Supervisor(a)")
      } else {
        this.cargo = res
        console.log(res)
      }
    })
  }

  showPositionWithoutSupervisor() {
    this.cargoService.showPositionWithoutSupervisor().subscribe(res => {
      this.cargoSemSupervisor = res
    })
  }

  choosePosition() {
    console.log(this.cargoSemSupervisorEscolhido)
    this.cargo = this.cargoSemSupervisorEscolhido
  }

  assignPosition() {
    this.supervisorService.showOneSupervisor(this.id_super).subscribe(res => {
      this.supervisor = res
    })

    this.cargoService.assignSupervisorToPosition(this.cargo, this.cargo.id_cargo, this.supervisor.id_super).subscribe({
      complete: () => {
        alert("O cargo foi atribuido ao supervisor")
        this.router.navigate(['/supervisor/listaSupervisor'])
      },
      error: () => {
        alert("Erro: supervisor não foi atribuido ao cargo")
        this.router.navigate(['/supervisor/listaSupervisor'])
      }
    })
  }

  leavePositionWithoutSupervisor(){
    this.cargoService.leavePositionWithoutSupervisor(this.cargo, this.cargo.id_cargo, this.supervisor.id_super).subscribe({
      complete: ()=>{
              alert("Supervisor está sem cargo")
              this.router.navigate(['/supervisor/listaSupervisor'])
      },
      error: () => {
        alert("Erro: supervisor não foi atribuido ao cargo")
        this.router.navigate(['/supervisor/listaSupervisor'])
      }
    })
  }





}

