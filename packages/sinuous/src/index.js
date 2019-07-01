/* Adapted from DOM Expressions - The MIT License - Ryan Carniato */
import { context, normalizeArray } from 'sinuous/h';
import observable, * as api from 'sinuous/observable';

export const h = context(api);
export default context;
export {
  observable,
  observable as o,
  normalizeArray as na
};
