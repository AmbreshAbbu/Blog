import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      name: '',
      username: '',
      email: '',
      password: ''
    });
    this.registerPayload = {
      name: '',
      username: '',
      email: '',
      password: ''
    };
  }

  onSubmit() {
    this.registerPayload.name = this.registerForm.get('name')!.value;
    this.registerPayload.username = this.registerForm.get('username')!.value;
    this.registerPayload.email = this.registerForm.get('email')!.value;
    this.registerPayload.password = this.registerForm.get('password')!.value;

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed');
    });
  }

}
