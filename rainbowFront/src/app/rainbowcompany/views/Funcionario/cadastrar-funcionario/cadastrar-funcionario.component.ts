import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  funcionario: Funcionario = {
    id_func: '',
    fnc_nome: '',
    fnc_salario: '',
    fnc_cidade: ''
  }

  id_cargo: string = ''
  cargos:any
  cargoEscolhido:any

  constructor(private funcionarioService: FuncionarioService,
    private cargoService:CargoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
  }


  confirmRegisterEmployee() {
    this.funcionarioService.registerEmployee(this.funcionario).subscribe({
      complete: () => {
        alert("Cadastro realizado com sucesso!")
        this.router.navigate([`/funcionarioComCargo`])
      },
      error: () => {
        alert("erro ao cadastrar funcionário")
        this.router.navigate([`/funcionarioComCargo`])
      }
    })
  }

  cancelRegister(){
    this.router.navigate([`/funcionarioComTurma`])
  }

  showPositionToAssign(){
    this.cargoService.showAllPositions().subscribe(resultado =>{
      this.cargos = resultado
    })
  }

  choosePosition(){
    console.log(this.cargoEscolhido)
  }


}
