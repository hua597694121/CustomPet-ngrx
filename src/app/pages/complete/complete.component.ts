import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PetTag } from 'src/app/core/pet-tag.model';
import { Store } from '@ngrx/store';
import { ResetAction } from 'src/app/core/pattag-store/action';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe(
      (state: PetTag) => {
        this.petTag = state;
      }
    );
  }
  ngOnDestroy(): void {
    this.tagStateSubscription.unsubscribe();
  }

  resetPetag() {
    this.store.dispatch(
      new ResetAction()
    );
  }

}
