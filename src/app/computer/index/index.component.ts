import { Component, OnInit } from '@angular/core';

import { ComputerService } from '../computer.service';
import { Computer } from '../computer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public searchText:any;
  public searchFilter: any = '';
  computers: Computer[] = [];

  // constructor() { }
  constructor(public computerService: ComputerService) { }

  ngOnInit(): void {
    this.computerService.getAll().subscribe((data: Computer[])=>{
      this.computers = data;
      console.log(this.computers);
    })
  }

  deleteComputer(id){
    this.computerService.delete(id).subscribe(res => {
         this.computers = this.computers.filter(item => item.id !== id);
         console.log('Computer deleted successfully!');
    })
  }

}
