
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerRoutingModule } from './computer-routing.module';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ComputerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComputerModule { }
