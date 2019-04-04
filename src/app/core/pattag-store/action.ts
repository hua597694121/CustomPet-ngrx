import { Action } from '@ngrx/store';
import { PetTag, initialTag } from '../pet-tag.model';
import { FeatureActionReducer } from './utils';

export enum ActionTypes {
    SELECT_SHAPE = 'SELECT_SHAPE',
    SELECT_FONT = 'SELECT_FONT',
    ADD_TEXT = 'ADD_TEXT',
    TOGGLE_CLIP = 'TOGGLE_CLIP',
    TOGGLE_GEMS = 'TOGGLE_GEMS',
    COMPLETE = 'COMPLETE',
    RESET = 'RESET'
}

export class SelectShapeAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.SELECT_SHAPE;
    constructor(public payload: string) { }

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            shape: this.payload
        };
    }
}

export class SelectFontAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.SELECT_FONT;
    constructor(public payload: string) { }

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            font: this.payload
        };
    }
}

export class AddTextAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.ADD_TEXT;
    constructor(public payload: string) { }

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            text: this.payload
        };
    }
}

export class ToggleClipAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.TOGGLE_CLIP;

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            clip: !petTag.clip
        };
    }
}

export class ToggleGemsAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.TOGGLE_GEMS;

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            gems: !petTag.gems
        };
    }
}

export class CompleteAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.COMPLETE;

    reduce = (petTag: PetTag): PetTag => {
        return {
            ...petTag,
            complete: true
        };
    }
}

export class ResetAction implements Action, FeatureActionReducer<PetTag> {
    readonly type = ActionTypes.RESET;

    reduce = (petTag: PetTag): PetTag => {
        return initialTag;
    }
}

export type Actions
    = SelectShapeAction
    | SelectFontAction
    | AddTextAction
    | ToggleClipAction
    | ToggleGemsAction
    | CompleteAction
    | ResetAction;


