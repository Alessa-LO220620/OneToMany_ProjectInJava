import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/rainbowcompany/models/funcionarioModel';
import { FuncionarioService } from 'src/app/rainbowcompany/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  funcionario: Funcionario = {
    id_func:'',
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

  //metodo para mostrar o funcionario selecionado na edição
  showOneEmployee() {
    this.funcionarioService.showOneEmployee(this.funcionario.id_func).subscribe((res) => {
      this.funcionario = res
    })
  }

  //metodo para editar o funcionário
  editEmployee() {
    this.funcionarioService.editEmployee(this.funcionario, this.funcionario.id_func).subscribe({
      complete: () => {
        alert("Funcionario editado com sucesso")
        this.router.navigate([`/funcionarioComCargo`])
      },
      error: () => {
        alert("Erro ao Editar")
        this.router.navigate([`/funcionarioComCargo`])
      }
    })
    console.log(this.funcionario)
  }

  cancelEdit(){
    this.router.navigate(['/funcionarioComCargo'])
  }

}
