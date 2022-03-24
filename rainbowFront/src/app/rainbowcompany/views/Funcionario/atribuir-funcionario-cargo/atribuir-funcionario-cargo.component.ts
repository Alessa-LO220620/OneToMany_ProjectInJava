import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-atribuir-funcionario-cargo',
  templateUrl: './atribuir-funcionario-cargo.component.html',
  styleUrls: ['./atribuir-funcionario-cargo.component.css']
})
export class AtribuirFuncionarioCargoComponent implements OnInit {

  cargos:Cargo[]=[]

  cargoEscolhido:any = []
  id_cargo:any
  id_func:any
  cargoDoFunc:any = []

  funcionario:Funcionario={
    id_func: '',
    fnc_nome:'',
    fnc_salario:'',
    fnc_cidade:''
    }


  constructor(private cargoService:CargoService,
              private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_func = this.route.snapshot.paramMap.get('id_func')
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    console.log(this.id_cargo)
    this.showAllPositions()
    this.showEmployee()
    this.findPosition()
  }

  showAllPositions(){
    this.cargoService.showAllPositions().subscribe(res=>{
      this.cargos = res
    })
  }

  showPosition(){
    console.log(this.cargoEscolhido)
  }

  showEmployee(){
    this.funcionarioService.showOneEmployee(this.id_func).subscribe(res=>{
      this.funcionario = res
    })
  }

  findPosition(){
    this.cargoService.showOnePosition(this.id_cargo).subscribe(res=>{
      this.cargoEscolhido = res
    })
  }

  assignPosition(){
    this.funcionarioService.assignPosition(this.cargoEscolhido,this.id_func).subscribe({
      complete: () => { alert("Funcionario adicionado ao cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      error: () => { alert("Funcionario não cadastrado no Cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      next: () => { console.log("Funcionario cadastrado com sucesso")}

      });
  }

  leaveEmployeeWithoutPosition(){
    this.funcionarioService.leaveEmployeeWithoutPosition (this.funcionario,this.id_func).subscribe({
      complete: () => { alert("Funcionario ficou sem Cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      error: () => { alert("Funcionario não ficou sem Cargo")
                        this.router.navigate(['/funcionarioComCargo'])
                      },
      next: () => { console.log("ok")}

      });

  }















}
