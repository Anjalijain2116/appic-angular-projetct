import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [LayoutsComponent, HeaderComponent],
  imports: [CommonModule,RouterModule,
    RouterLink,
    RouterOutlet
  ],
})
export class LayoutsModule {}
