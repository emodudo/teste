import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  constructor(private elementRef: ElementRef) {
      // código de inicialização aqui
  }

  ngAfterViewInit() {
    const mostrarCardGK = this.elementRef.nativeElement.querySelector('#mostrarCardGK');
    const meuCard = this.elementRef.nativeElement.querySelector('#meuCard');

    mostrarCardGK.addEventListener('click', (event: MouseEvent) => {
        const botaoRect = mostrarCardGK.getBoundingClientRect();
        meuCard.style.display = 'block';
        meuCard.style.position = 'absolute';
        meuCard.style.top = botaoRect.top + 'px';
        meuCard.style.left = botaoRect.left + 'px';
    });
}
}