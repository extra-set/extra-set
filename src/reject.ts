import type {testFn} from "./_types";

/**
 * Discards values which pass a test.
 * @param x a set
 * @param ft test function (v, v, x)
 */
function reject<T>(x: Iterable<T>, ft: testFn<T>): Set<T> {
  var a = new Set<T>();
  for(var v of x)
    if(!ft(v, v, x)) a.add(v);
  return a;
}
export default reject;
