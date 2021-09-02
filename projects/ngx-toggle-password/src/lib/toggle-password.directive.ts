import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxTogglePassword]'
})
export class TogglePasswordDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    this.init();
  }

  /**
   * Initialize toggle password.
   * 
   * @returns void
   */
  init(): void {
    console.log('this.el.nativeElement',this.el.nativeElement);
    const parent = this.el.nativeElement.parentNode;
    const parentSpanDiv = this.createElement('div', 'input-group-append');
    const childSpanDiv = this.createElement('div', 'input-group-text');
    const span = this.createElement('span', 'fas fa-eye', 'Show Password');
    span.addEventListener('click', (event: MouseEvent) => {
      this.toggle(span);
    });
    childSpanDiv.appendChild(span);
    parentSpanDiv.appendChild(childSpanDiv);
    parent.appendChild(parentSpanDiv);
  }

  /**
   * Create element.
   * @param elem string
   * @param elemClass string
   * @param elemTitle string
   * 
   * @returns HTMLElement
   */
  createElement(elem: string, elemClass: string | null = null, elemTitle: string | null = null): HTMLElement {
    const element = document.createElement(elem);
    if(elemClass){
      element.setAttribute('class',elemClass);
    }
    if(elemTitle){
      element.setAttribute('title',elemTitle);
    }
    return element;
  }

  /**
   * Toggle element.
   * @param span HTMLElement
   * 
   * @returns void
   */
  toggle(span: HTMLElement): void {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.setAttribute('class','fas fa-eye-slash');
      span.setAttribute('title','Hide Password');
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.setAttribute('class','fas fa-eye');
      span.setAttribute('title','Show Password');
    }
  }
}
