import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PetTag } from 'src/app/core/pet-tag.model';
import { Store } from '@ngrx/store';
import { SelectShapeAction, SelectFontAction, AddTextAction, ToggleClipAction, ToggleGemsAction, CompleteAction, ResetAction } from 'src/app/core/pattag-store/action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe(
      (state: PetTag) => {
        this.petTag = state;
        this.done = !!(this.petTag.shape && this.petTag.text);
        console.log('update subscribe: ', state);
      }
    );
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  selectShapeHandler(shape: string) {
    console.log('dispatch shape action:', shape);
    this.store.dispatch(new SelectShapeAction(shape));
  }

  selectFontHandler(fontType: string) {
    this.store.dispatch(new SelectFontAction(fontType));
  }

  addTextHandler(text: string) {
    this.store.dispatch(new AddTextAction(text));
  }

  toggleClipHandler() {
    this.store.dispatch(new ToggleClipAction());
  }

  toggleGemsHandler() {
    this.store.dispatch(new ToggleGemsAction());
  }

  submit() {
    this.store.dispatch(new CompleteAction());
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }

}
