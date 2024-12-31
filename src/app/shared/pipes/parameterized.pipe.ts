import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parameterized'
})
export class ParameterizedPipe implements PipeTransform {
  transform(value: string, prefix: string = '', suffix: string = ''): string {
    if (!value) return '';
    return `${prefix}${value}${suffix}`;
  }
}