import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{ posts: any[] }>());
export const loadPostsFailure = createAction('[Posts] Load Posts Failure', props<{ error: any }>());