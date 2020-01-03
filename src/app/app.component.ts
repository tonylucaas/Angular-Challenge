import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { Component } from '@angular/core';

// import { zipcodeValidator } from './validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularChallenge';

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nomeitem: [null, [Validators.required, Validators.maxLength(50)]],
      // quantidade: null,
      // unidademedida: [null, Validators.required],
      // preco: [null, Validators.required],
      // produto: [null, Validators.required],
      // datavalidade: null,
      // datafabricacao: [null, Validators.required]
    });
  }

localStorage.setItem("nomeitem", JSON.stringify( this.fb.group( nomeitem ) ); )

onsubmit(); {
    console.log(this.form.value);
  }
}
