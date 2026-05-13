import { Component,output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TweetsService} from '../../../../core/services/tweets/tweets.service';

@Component({
  selector: 'app-add-tweet',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './add-tweet.html',
  styleUrl: './add-tweet.scss',
  standalone: true
})
export class AddTweet {
  fnToggleTweet= output();//para cerrar

  formTweet: FormGroup;//declaramos el formulario?
  constructor(
    private formBuilder:FormBuilder,
    private authService:TweetsService,

  ) {
    this.formTweet = this.formBuilder.group({
      "token":['btc',[Validators.required]],
      "tag1":['',[Validators.maxLength(10)]],
      "tag2":['',[Validators.maxLength(10)]],
      "tag3":['',[Validators.maxLength(10)]],
      "contenido":['',[Validators.required,Validators.minLength(10),Validators.maxLength(180)]],
    })
  }
  enviarTweet() {
    if(this.formTweet.invalid) {
      alert("Formulario no válido")
      return;
    }
    this.authService.enviarTweet(this.formTweet.value).subscribe({
      next: (data)=>{
        console.log(data);
        this.fnToggleTweet.emit();
      },
      error: (err)=>{
        console.log(err)
      }


    })
  }
}
