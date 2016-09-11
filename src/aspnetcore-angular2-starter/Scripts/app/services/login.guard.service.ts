import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
import { CanComponentDeactivate } from '../modal/can-deactivate-guard.service';


@Injectable()
export class LoginGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
        return false;
    }
}
