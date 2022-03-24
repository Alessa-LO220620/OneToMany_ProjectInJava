import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionarios-do-cargo',
  templateUrl: './lista-funcionarios-do-cargo.component.html',
  styleUrls: ['./lista-funcionarios-do-cargo.component.css']
})
export class ListaFuncionariosDoCargoComponent implements OnInit {

  id_cargo:any
  funcionarios: Funcionario[]=[]


  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.mostraFuncCargo()
}

mostraFuncCargo(){
  this.funcionarioService.showEmployeeByPosition(this.id_cargo).subscribe(resultado =>{
    this.funcionarios = resultado
    console.log(this.funcionarios)
  })
}


}