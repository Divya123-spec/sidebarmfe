import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';

//to run on local needs to mke it true else false
const local=false;
@NgModule({
  declarations: [
    AppComponent,
    NavigationLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []],
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector:Injector){}


  ngDoBootstrap(){
    const sidebarApp=createCustomElement(AppComponent,{injector:this.injector});
    customElements.define('mf-sidebar',sidebarApp);
  }

}
