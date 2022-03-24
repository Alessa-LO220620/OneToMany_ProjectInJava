import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folha } from 'src/app/rainbowcompany/models/FolhaModel';
import { FolhaService } from 'src/app/rainbowcompany/services/folha.service';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-lista-folha-funcionario',
  templateUrl: './lista-folha-funcionario.component.html',
  styleUrls: ['./lista-folha-funcionario.component.css']
})
export class ListaFolhaFuncionarioComponent implements OnInit {

  id_func:any
  nomeFuncionario:any

  enviadoaofinanceiro:boolean = false

  folhas:Folha[] = []

  folha:Folha ={
    codigoFolha:'',
    folhaDescricao:'',
    dataPagamento: '',
    salario:0,
    beneficio:'',
    num_falta:0,
    status:''
  }
  constructor(private folhaService:FolhaService,
              private funcionarioService:FuncionarioService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_func = this.route.snapshot.paramMap.get('id_func')
    this.findPayrollOfEmployee()
    this.findEmployee()

  }


  findPayrollOfEmployee(){
    this.folhaService.findPayrollOfEmployee(this.id_func).subscribe(res=>{
      this.folhas = res
    })
  }

  findEmployee(){
    this.funcionarioService.showOneEmployee(this.id_func).subscribe(res=>{
      this.nomeFuncionario = res.fnc_nome
    })
  }

  sendToFinancePayroll(codigoFolha:any){
    
    this.folhaService.findOnePayroll(codigoFolha).subscribe(res=>{
      this.folha = res

      this.folhaService.sendToFinancePayroll(this.folha, this.folha.codigoFolha).subscribe({
        complete: () => {alert("Folha de pagamento enviado ao Financeiro")
                         this.findPayrollOfEmployee()},
        error: () => {alert("Erro: Não foi possível enviar folha ao Financeiro")}
      })
    })

  }
























}
