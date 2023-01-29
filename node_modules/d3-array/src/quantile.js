import max from "./max.js";
import maxIndex from "./maxIndex.js";
import min from "./min.js";
import minIndex from "./minIndex.js";
import quickselect from "./quickselect.js";
import number, {numbers} from "./number.js";
import {ascendingDefined} from "./sort.js";
import greatest from "./greatest.js";

export default function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return min(values);
  if (p >= 1) return max(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = max(quickselect(values, i0).subarray(0, i0 + 1)),
      value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

export function quantileSorted(values, p, valueof = number) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

export function quantileIndex(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return minIndex(values);
  if (p >= 1) return maxIndex(values);
  var n,
      i = Math.floor((n - 1) * p),
      order = (i, j) => ascendingDefined(values[i], values[j]),
      index = quickselect(Uint32Array.from(values, (_, i) => i), i, 0, n - 1, order);
  return greatest(index.subarray(0, i + 1), i => values[i]);
}
