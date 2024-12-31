import { createReducer, on } from '@ngrx/store';
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './posts.action';

export interface PostsState {
  posts: any[];
  error: any;
}

export const initialState: PostsState = {
  posts: [],
  error: null
};

export const postsReducer = createReducer(
  initialState,
  on(loadPosts, state => ({ ...state, error: null })),
  on(loadPostsSuccess, (state, { posts }) => ({ ...state, posts })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error }))
);