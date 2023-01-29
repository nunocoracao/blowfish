export function addDummyNode(g: any, type: any, attrs: any, name: any): any;
export function simplify(g: any): Graph;
export function asNonCompoundGraph(g: any): Graph;
export function successorWeights(g: any): any;
export function predecessorWeights(g: any): any;
export function intersectRect(
  rect: any,
  point: any
): {
  x: any;
  y: any;
};
export function buildLayerMatrix(g: any): any;
export function normalizeRanks(g: any): void;
export function removeEmptyRanks(g: any): void;
export function addBorderNode(g: any, prefix: any, rank: any, order: any, ...args: any[]): any;
export function maxRank(g: any): any;
export function partition(
  collection: any,
  fn: any
): {
  lhs: any[];
  rhs: any[];
};
export function time(name: any, fn: any): any;
export function notime(name: any, fn: any): any;
import { Graph } from '../graphlib/index.js';
