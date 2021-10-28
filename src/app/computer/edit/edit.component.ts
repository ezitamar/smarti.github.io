import { Component, OnInit } from '@angular/core';

import { ComputerService } from '../computer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Computer } from '../computer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  computer: Computer;
  form: FormGroup;

  constructor(
    public computerService: ComputerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idComputer'];
    this.computerService.find(this.id).subscribe((data: Computer)=>{
      this.computer = data;
    });

    this.form = new FormGroup({
      Manufacturer: new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$') ]),
      model: new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$') ]),
      size: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      Processor:new FormControl('', [ Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$') ]),
      Memory: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.computerService.update(this.id, this.form.value).subscribe(res => {
         console.log('Computer updated successfully!');
         this.router.navigateByUrl('computer/index');
    })
  }

}
