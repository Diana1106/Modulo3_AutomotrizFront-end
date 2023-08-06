import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutomotrizService } from '../services/automotriz.service';
import { detalles, detallesG, personas, tareas } from '../entity/detalles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  tareaGuardada: FormGroup;
  tarea: tareas | undefined;
  listaDetalles: detalles[]=[];
  idTareas: any;
  listaTareas: tareas[]=[];
  guardarAll: FormGroup;
  persona: personas | undefined;
  detalle: detallesG | undefined;
  constructor(private servicioAutomotriz: AutomotrizService, private builder: FormBuilder) { 
    this.tareaGuardada = this.builder.group({
      id: [],
      nombre: ['', Validators.required]
    })
    this.guardarAll = this.builder.group({
      nombre: ['', Validators.required],
      tareas:[],

    })
  }
  ngOnInit(): void {
   this.mostrarListaDeta()
   this.cargarTarea()
    
  }
  cargarTarea(){
    this.servicioAutomotriz.obtenerTarea().subscribe(capturarDtos=>{
      this.idTareas=capturarDtos.length
      this.listaTareas=capturarDtos;
    })
  }

  mostrarListaDeta(){
    this.servicioAutomotriz.mostrarDetalles().subscribe(capturarDtos=>{
      this.listaDetalles=capturarDtos;
    })
  }

  guardarTarea(){
    this.tarea={
      tareas:this.tareaGuardada.value.nombre
    }
    this.servicioAutomotriz.guardarTarea(this.tarea).subscribe(capturarDtos=>{
      this.mostrarListaDeta()
      this.limpiarDatos()
      this.cargarTarea()
    })

  }
  limpiarDatos(){
    this.tareaGuardada.reset()
  }
  guardarTodo(){
    this.persona={
      nombre:this.guardarAll.value.nombre
    }
    this.servicioAutomotriz.guardarpersona(this.persona).subscribe(capturarDtos=>{
      this.detalle={
        tareas: this.guardarAll.value.tareas,
        personas: parseInt(capturarDtos.id as string, 10),
      }
      this.servicioAutomotriz.guardarDetalle(this.detalle).subscribe(capturarDtos=>{
        this.mostrarListaDeta()
        this.guardarAll.reset()
      })
    })

  }

}
