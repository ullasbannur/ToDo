import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TodocompComponent } from './components/todocomp/todocomp.component';


@NgModule({
  declarations: [
    TodocompComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[TodocompComponent]
})
export class HomeModule { }
