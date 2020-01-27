import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { WebComponentComponent } from './web-component/web-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    WebComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [WebComponentComponent],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(
        private injector: Injector
      ) { }
    
      ngDoBootstrap() {
        const webComponentElement = createCustomElement(
            WebComponentComponent,
          { injector: this.injector }
        )
        customElements.define('wc-web-component', webComponentElement)
      }
}
