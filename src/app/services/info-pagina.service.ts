import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {}
  cargada = false;

  equipo: any = [];

  constructor( private http: HttpClient) {
    console.log('Servicio de info pagina listo')
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
  private cargarEquipo(){
    this.http.get('https://angular-html-54752.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      console.log(resp);
    });
  }
  
}
