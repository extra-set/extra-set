import type {testFn} from './_types';

/**
 * Keeps values which pass a test.
 * @param x a set (updated)
 * @param fn test function (v, v, x)
 * @returns x
 */
function filter$<T>(x: Set<T>, fn: testFn<T>): Set<T> {
  for(var v of x)
    if(!fn(v, v, x)) x.delete(v);
  return x;
}
export default filter$;
