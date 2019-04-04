import { initialTag, PetTag } from '../pet-tag.model';
import { Action } from '@ngrx/store';
import { ActionTypes, Actions } from './action';

export function petTagReducer(state = initialTag, action: Actions): PetTag {
    if (typeof action.reduce === 'function') {
        const func = action.reduce;
        return func(state);
    }
    return state;
}


    // switch (action.type) {
    //     case ActionTypes.SELECT_SHAPE:
    //         return Object.assign(
    //             {}, state, { shape: action.payload }
    //         );

    //     case ActionTypes.SELECT_FONT:
    //         return Object.assign(
    //             {}, state, { font: action.payload }
    //         );

    //     case ActionTypes.ADD_TEXT:
    //         return Object.assign(
    //             {}, state, { text: action.payload }
    //         );

    //     case ActionTypes.TOGGLE_CLIP:
    //         return Object.assign(
    //             {}, state, { clip: !state.clip }
    //         );

    //     case ActionTypes.TOGGLE_GEMS:
    //         return Object.assign(
    //             {}, state, { gems: !state.gems }
    //         );

    //     case ActionTypes.COMPLETE:
    //         return Object.assign(
    //             {}, state, { complete: action.payload }
    //         );

    //     case ActionTypes.RESET:
    //         return Object.assign(
    //             {}, state, initialTag
    //         );

    //     default:
    //         return state;
    // }
