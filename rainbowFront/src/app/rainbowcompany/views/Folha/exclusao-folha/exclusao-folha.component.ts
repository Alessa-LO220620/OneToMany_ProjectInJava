import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folha } from 'src/app/rainbowcompany/models/FolhaModel';
import { FolhaService } from 'src/app/rainbowcompany/services/folha.service';

@Component({
  selector: 'app-exclusao-folha',
  templateUrl: './exclusao-folha.component.html',
  styleUrls: ['./exclusao-folha.component.css']
})
export class ExclusaoFolhaComponent implements OnInit {

  codigoFolha:any
  id_func:any

  statusEscolhidoNoSelect:any

  statusParaEscolha:string[] = []

  folha: Folha = {
    codigoFolha:'',
    folhaDescricao:'',
    dataPagamento: '',
    salario:0,
    beneficio:'',
    num_falta:0,
    status:''
  }

  
  constructor(private folhaServoce:FolhaService,
              private route: ActivatedRoute, 
              private location:Location) { }

  ngOnInit(): void {
    this.codigoFolha = this.route.snapshot.paramMap.get('codigoFolha')
    this.id_func = this.route.snapshot.paramMap.get('id_func')
    this.statusParaEscolha = ['ENVIADOAOFINANCEIRO']
    this.showPayroll()

  }

  showPayroll(){
    this.folhaServoce.findOnePayroll(this.codigoFolha).subscribe(res=>{
      this.folha = res
      this.folha.status = res.status
    })
  }

  deletePayroll(){
    this.folhaServoce.deletePayroll(this.codigoFolha).subscribe({
      complete: () => {alert("Folha de Pagamento Excluída com sucesso")
                      this.location.back()},
      error: () => {alert("Erro: Algo saiu errado - folha não excluída")}
    })
  }

  statusChoose(){
    console.log(this.statusEscolhidoNoSelect)
    this.folha.status = this.statusEscolhidoNoSelect
  }

}
