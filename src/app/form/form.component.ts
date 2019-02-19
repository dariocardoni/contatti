import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidateURL} from '../validators/test.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
mioForm: FormGroup;

  constructor() {
    this.mioForm = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),
      cognome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      citta: new FormControl('', [Validators.required, Validators.minLength(5)]),
      mail: new FormControl('', [Validators.required, Validators.email])
    });
  }
   get nome() { return this.mioForm.get('nome'); }

  get cognome() { return this.mioForm.get('cognome'); }

  get citta() { return this.mioForm.get('citta'); }

  get mail() { return this.mioForm.get('mail'); }

  print() {
    console.log(this.mioForm.value); }




  getInfo() {
    console.log(this.mioForm.value);
  }



}