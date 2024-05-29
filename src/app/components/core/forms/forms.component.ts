import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatButtonModule
  ],
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {

  institution = {
    name: '',
    address: '',
    phone: '',
    foundationDate: '',
    studentCount: 0,
    institutionType: ''
  };

  constructor(private _router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted!');
    console.log('Datos del formulario:', this.institution);
  }

  onBack(): void {
    this._router.navigate(['/flexy/home']);
  }
}
