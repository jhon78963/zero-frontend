import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  SidebarComponent,
];
const DIRECTIVES = [];
const MATERIAL_MODULES = [];
const MODULES = [];
const PIPES = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS,],
})
export class SharedModule {}
