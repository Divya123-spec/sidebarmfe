import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.css']
})
export class NavigationLinksComponent implements OnInit {
  toShow: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
  }

  private loadScript(url: string): void {
    if (document.querySelectorAll(`script[src='${url}']`).length === 0) {
      const script = document.createElement('script');
      script.onload = function () {
          // do stuff with the script
      };
      script.src = url;
      document.head.appendChild(script);
    }
  }


  public toggleMicroTwo() {
    if (!this.toShow) {
     this.loadScript('//localhost:4005/elements/dashboardApp-elements-es2015.js');

      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<mf-dashboardApp>
      <div class="loader-05"></div>
      </mf-dashboardApp>`);
    } else {
      this.toShow = '';
    }

  }


  ngOnInit(): void {
  }

}
