import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class NuiService {
  private visible = new BehaviorSubject<boolean>(false);
  public vibible$ = this.visible.asObservable();

  constructor() {
    window.addEventListener('message', this.onMessageReceived.bind(this));
  }

  private onMessageReceived(event: MessageEvent) {
    const data = event.data;

    if (data.type === 'ui') {
      this.visible.next(data.status);
    }
  }

  public closeUI() {
    this.visible.next(false);
    this.postMessage('close', {});
  }

  public sendAction(action: string, data: any = {}) {
    this.postMessage('action', { action, ...data });
  }

  private postMessage(event: string, data: any = {}) {
    axios.post(`https://TruckerJob/${event}`, {
      ...data,
    });
  }
}
