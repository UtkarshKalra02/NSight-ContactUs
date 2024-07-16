import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(2)],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      organization: [''],
      message: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit():void{

  }

  get firstName(){
    return this.form.get('firstName');
  }

}
