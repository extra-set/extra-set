import id from './_id';
import is from './is';
import concat$ from './concat$';
import type {mapFn} from './_types';

/**
 * Flattens nested set, using map function.
 * @param x a nested set
 * @param fm map function (v, v, x)
 */
function flatMap(x: Iterable<any>, fm: mapFn<any, any>=null): Set<any> {
  var fm = fm||id as mapFn<any, any>;
  var a = new Set();
  for(var v of x) {
    var v1 = fm(v, v, x);
    if(is(v1)) concat$(a, v1);
    else a.add(v1);
  }
  return a;
}
export default flatMap;
