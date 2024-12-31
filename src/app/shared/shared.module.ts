import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfLoggedInDirective } from './directives/if-logged-in.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ParameterizedPipe } from './pipes/parameterized.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  declarations: [
    IfLoggedInDirective,
    HighlightDirective,
    CustomPipe,
    ParameterizedPipe,
    ImpurePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IfLoggedInDirective,
    HighlightDirective,
    CustomPipe,
    ParameterizedPipe,
    ImpurePipe,
  ],
})
export class SharedModule {}
