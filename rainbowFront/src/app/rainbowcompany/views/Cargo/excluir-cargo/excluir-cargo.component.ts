import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';

@Component({
  selector: 'app-excluir-cargo',
  templateUrl: './excluir-cargo.component.html',
  styleUrls: ['./excluir-cargo.component.css']
})
export class ExcluirCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: '',
    cargo_nome: '',
    cargo_descricao: '',
    cargo_setor: ''
  }

  constructor(private cargoService: CargoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id_cargo')
    this.showOnePosition()
  }

  //metodo para buscar uma turma
  showOnePosition() {
    this.cargoService.showOnePosition(this.cargo.id_cargo).subscribe(res => {
      this.cargo = res;
    })
  }

  //metodo para deletar um cargo
  deletePosition() {
    this.cargoService.deletePosition(this.cargo.id_cargo).subscribe({
      complete: () => {
        alert("O cargo foi deletado com sucesso!")
        this.router.navigate(['/cargo'])
      },
      error: () => {
        alert("Existem supervisores cadastrados nesse cargo, não é possível deletar.")
        this.router.navigate(['/cargo'])
      }
    })
  }
}
