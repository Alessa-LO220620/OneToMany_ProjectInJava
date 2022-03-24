import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { Supervisor } from 'src/app/rainbowcompany/models/supervisorModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';
import { SupervisorService } from 'src/app/rainbowcompany/services/supervisor.service';

@Component({
  selector: 'app-supervisor-do-cargo',
  templateUrl: './supervisor-do-cargo.component.html',
  styleUrls: ['./supervisor-do-cargo.component.css']
})
export class SupervisorDoCargoComponent implements OnInit {

  id_cargo:any

  supervisorCadastrado: boolean = false

  supervisorSemCargo:any
  supervisorSemCargoEscolhido: any = []

  supervisor:Supervisor ={
    id_super: " ",
    super_nome:" ",
    super_formacao:" ",
    super_foto:" "
  }

  cargo:Cargo = {
    id_cargo:'',
    cargo_nome:'',
    cargo_descricao:'',
    cargo_setor:''
  }

  constructor(private supervisorService:SupervisorService,
              private cargoService:CargoService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.showOnePosition()
    this.showSupervisorFromPosition()
    this.showSupervisorWithoutPosition()
  }

  showOnePosition(){
    this.cargoService.showOnePosition(this.id_cargo).subscribe(res=>{
      this.cargo = res
    })
  }

  showSupervisorFromPosition(){
    this.supervisorService.showSupervisorFromPosition(this.id_cargo).subscribe((resultado)=>{

      if(resultado == undefined){
        alert("Para esse cargo não está definido um supervisor")
        this.supervisorCadastrado = false
        console.log(resultado);
      }else{
        this.supervisor = resultado
        this.supervisorCadastrado = true
        console.log(resultado);
      }
    })
}

showSupervisorWithoutPosition(){
  this.supervisorService.showSupervisorWithoutPosition().subscribe(res=>{
    this.supervisorSemCargo = res
  })
}

showSupervisor(){
  this.supervisor = this.supervisorSemCargoEscolhido
}

addSupervisor(){
  this.cargoService.showOnePosition(this.id_cargo).subscribe(res=>{
    this.cargo = res
  })

  this.cargoService.assignSupervisorToPosition(this.cargo, this.id_cargo,this.supervisor.id_super).subscribe({
    complete: () => {alert("O supervisor foi atribuído para o cargo")
                    this.router.navigate(['/cargo'])},
    error: () => {alert("Erro: supervisor não atribuido")
                  this.router.navigate(['/cargo']) }
  })

}

leavePositionWithoutSupervisor(){
  this.cargoService.leavePositionWithoutSupervisor(this.cargo, this.id_cargo,this.supervisor.id_super).subscribe({
    complete: () => {alert("O cargo está sem supervisor")
                    this.router.navigate(['/cargo'])},
    error: () => {alert("Erro")
                  this.router.navigate(['/cargo']) }
  })
}
















}