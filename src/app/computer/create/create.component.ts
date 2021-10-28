
import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../computer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public computerService: ComputerService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Manufacturer: new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$') ]),
      model: new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$') ]),
      size: new FormControl('', [ Validators.required]),
      Processor:new FormControl('', [ Validators.required]),
      Memory: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.computerService.create(this.form.value).subscribe(res => {
         console.log('Computer created successfully!');
         this.router.navigateByUrl('computer/index');
    })
  }

}

