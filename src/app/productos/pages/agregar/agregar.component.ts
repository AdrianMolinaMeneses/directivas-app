import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });

  texto1: string = 'Adrian Molina';
  color: string = 'red';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }

  campoNoValido(campo: string) {
    return this.miFormulario.controls[campo].invalid;
  }

  get nombre() {
    return this.miFormulario.get('nombre');
  }
}
