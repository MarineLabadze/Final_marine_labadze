import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(component: RegisterComponent): Observable<boolean> | boolean {
    // if (component.isDirty()) {
    //   // If form is dirty, prompt user before leaving
    //   return confirm('You have unsaved changes. Are you sure you want to leave?');
    // }
    return true;
  }
}

