import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Via } from './via';

@Injectable()
export class NavService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<Via>(null);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(via:Via) {
    this._navItemSource.next(via);
  }
}