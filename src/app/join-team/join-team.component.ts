import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.css']
})
export class JoinTeamComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phone: ['', Validators.required],
      skill: ['', Validators.required],
      experience: ['', Validators.required],
      linkedIn: ['', Validators.required],
      cv: ['', Validators.required],
      recaptcha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    
  }

}
