import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aluno'
})
export class AlunoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
