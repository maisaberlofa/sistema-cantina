import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.scss']
})
export class ClienteDetalhesComponent implements OnInit {

  cliente: any;
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cliente = this.clientes[id];
    console.log(this.clientes);
  }

  clientes =
    [{
      id: 0,
      name: 'Teste1',
      user: 'usuarioteste',
      date: '15/10/2022',
      orders: [
      {
        item: 'teste',
        price: '1,25',
        purchaseDate: '20/10/2022',
        vendedor: 'Teste'
      },
      {
        item: 'teste2',
        price: '1.25',
        purchaseDate: '20/12/2022',
        vendedor: 'Teste'
      }]
    },
    {
      id: 1,
      name: 'Teste2',
      user: 'usuarioteste',
      date: '15/10/2022',
      orders: [
      {
        item: 'teste',
        price: '1,25',
        purchaseDate: '20/10/2022',
        vendedor: 'Teste'
      },
      {
        item: 'teste2',
        price: '1.25',
        purchaseDate: '20/12/2022',
        vendedor: 'Teste'
      }]
    },
  ];

}
