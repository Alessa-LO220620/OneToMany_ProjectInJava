import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/rainbowcompany/models/cargoModel';
import { CargoService } from 'src/app/rainbowcompany/services/cargo.service';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {

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
  showOnePosition(){
    this.cargoService.showOnePosition(this.cargo.id_cargo).subscribe(res => {
      this.cargo = res;
    })
  }

  //metodo para editar cargo
  editPosition() {
    this.cargoService.editPosition(this.cargo).subscribe({
      complete: () => {
        alert("Este cargo foi editado com sucesso"),
        this.router.navigate(['/cargo'])
      },
      error: () => {
        alert("Não foi possível editar esse cargo")
      }
    })
  }

}
