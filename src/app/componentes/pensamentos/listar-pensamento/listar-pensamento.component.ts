import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    /* {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Danielly',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    } */
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
