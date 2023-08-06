import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reg-auto',
  templateUrl: './reg-auto.component.html',
  styleUrls: ['./reg-auto.component.css']
})
export class RegAutoComponent implements OnInit {

  

  constructor(private formBuilder: FormBuilder , private http:HttpClient){}

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    //FORMULARIO REACTIVO

    /*this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });*/


  }

}
