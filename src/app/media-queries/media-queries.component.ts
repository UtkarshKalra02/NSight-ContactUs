import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-queries',
  templateUrl: './media-queries.component.html',
  styleUrls: ['./media-queries.component.css']
})
export class MediaQueriesComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      firstName: ['', Validators.required],
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

}
