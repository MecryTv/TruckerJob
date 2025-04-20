import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui';
  visible = false;

  constructor() {
    type NuiMessage = { action: 'open' | 'close' };
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (event: MessageEvent<NuiMessage>) => {
        if (event.data.action === 'open') {
          this.visible = true;
        }
        if (event.data.action === 'close') {
          this.visible = false;
        }
      });
    }
  }
}
