import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detalles, detallesG, personas, tareas } from '../entity/detalles';

@Injectable({
  providedIn: 'root'
})
export class AutomotrizService {
urlAutomotriz = "http://localhost:3000";
constructor(private Http: HttpClient) { }
mostrarDetalles() {
  return this.Http.get<detalles[]>(this.urlAutomotriz + "/detalles")
}

guardarTarea(guardarT:tareas){
  return this.Http.post<tareas>(this.urlAutomotriz + "/tareas", guardarT);
}

obtenerTarea(){
  return this.Http.get<tareas[]>(this.urlAutomotriz + "/tareas")
}

guardarpersona(guarPersona:personas){
  return this.Http.post<personas>(this.urlAutomotriz + "/personas", guarPersona);
}
guardarDetalle(guarDetal:detallesG){
  return this.Http.post<detallesG>(this.urlAutomotriz + "/detalles", guarDetal);
}

}
