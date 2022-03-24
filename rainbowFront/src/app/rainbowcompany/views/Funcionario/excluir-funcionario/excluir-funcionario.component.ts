import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-excluir-funcionario',
  templateUrl: './excluir-funcionario.component.html',
  styleUrls: ['./excluir-funcionario.component.css']
})
export class ExcluirFuncionarioComponent implements OnInit {

  id_cargo: String = ''

  funcionario: Funcionario = {
    id_func: '',
    fnc_nome: '',
    fnc_salario: '',
    fnc_cidade: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.funcionario.id_func = this.route.snapshot.paramMap.get('id_func')
    this.showOneEmployee()
  }

  //metodo get para mostrar o funcionário que irei excluir
  showOneEmployee() {
    this.funcionarioService.showOneEmployee(this.funcionario.id_func).subscribe((res) => {
      this.funcionario = res
    })
  }

  //metodo del para excluir o funcionario selecionado
  deleteEmployee() {
    this.funcionarioService.deleteEmployee(this.funcionario.id_func).subscribe({
      complete: () => {
        alert("Funcionário excluído com sucesso")
        this.router.navigate([`/funcionarioComCargo`])
      },
      error: () => {
        alert("Erro ao excluir funcionário")
        this.router.navigate([`/funcionarioComCargo`])
      }
    })
    console.log(this.funcionario)
  }

  cancelDelete(){
    this.router.navigate(['/funcionarioComCargo'])
  }

}
