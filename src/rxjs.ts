import operators = require('rxjs/operators')

import { letProto } from 'rxjs/operator/let'
import { _catch } from 'rxjs/operator/catch'
import { _do } from 'rxjs/operator/do'
import { toPromise } from 'rxjs/operator/toPromise'

import { empty } from 'rxjs/observable/empty'
import { forkJoin } from 'rxjs/observable/forkJoin'
import { from } from 'rxjs/observable/from'
import { fromEvent } from 'rxjs/observable/fromEvent'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { interval } from 'rxjs/observable/interval'
import { of } from 'rxjs/observable/of'
import { range } from 'rxjs/observable/range'
import { _throw } from 'rxjs/observable/throw'
import { timer } from 'rxjs/observable/timer'

const observables = [
  'empty',
  'forkJoin',
  'from',
  'fromEvent',
  'fromPromise',
  'interval',
  'of',
  'range',
  'throw',
  'timer',
].reduce((o, k) => {o[k] = true; return o}, {} as {[k: string]: true})

const pathMappings: {[k: string]: string} = {
  'let': 'rxjs/operator/let',
  'catch': 'rxjs/operator/catch',
  'do': 'rxjs/operator/do',
  'toPromise': 'rxjs/operator/toPromise',
}

function pathMap(name: string) {
  if (name in observables) return `rxjs/observable/${name}`
  return pathMappings[name] || `rxjs/operators/${name}`
}

const outputMappings: {[k: string]: string} = {
  'let': '_let',
  'catch': '_catch',
  'do': '_do',
  'throw': '_throw',
}

function getOutput(m: any, name: string) {
  let o = outputMappings[name] || name
  return o === null ? m : m[o]
}

function load (name: string) {
  let p = pathMap(name)
  let m = require(p)
  return getOutput(m, name)
}

export default new Proxy({}, {
  get (cache: any, name: string) {
    if (typeof name !== 'string') return cache[name]
    return cache[name] || (cache[name] = load(name))
  }
}) as {
  readonly let: typeof letProto
  readonly catch: typeof _catch
  readonly do: typeof _do
  readonly toPromise: typeof toPromise

  readonly empty: typeof empty
  readonly forkJoin: typeof forkJoin
  readonly from: typeof from
  readonly fromEvent: typeof fromEvent
  readonly fromPromise: typeof fromPromise
  readonly interval: typeof interval
  readonly of: typeof of
  readonly range: typeof range
  readonly throw: typeof _throw
  readonly timer: typeof timer

  readonly buffer: typeof operators.buffer
  readonly bufferCount: typeof operators.bufferCount
  readonly bufferTime: typeof operators.bufferTime
  readonly bufferToggle: typeof operators.bufferToggle
  readonly bufferWhen: typeof operators.bufferWhen
  readonly combineAll: typeof operators.combineAll
  readonly combineLatest: typeof operators.combineLatest
  readonly concat: typeof operators.concat
  readonly concatAll: typeof operators.concatAll
  readonly concatMap: typeof operators.concatMap
  readonly concatMapTo: typeof operators.concatMapTo
  readonly debounce: typeof operators.debounce
  readonly debounceTime: typeof operators.debounceTime
  readonly defaultIfEmpty: typeof operators.defaultIfEmpty
  readonly delay: typeof operators.delay
  readonly delayWhen: typeof operators.delayWhen
  readonly distinctUntilChanged: typeof operators.distinctUntilChanged
  readonly every: typeof operators.every
  readonly exhaustMap: typeof operators.exhaustMap
  readonly expand: typeof operators.expand
  readonly filter: typeof operators.filter
  readonly first: typeof operators.first
  readonly groupBy: typeof operators.groupBy
  readonly ignoreElements: typeof operators.ignoreElements
  readonly last: typeof operators.last
  readonly map: typeof operators.map
  readonly mapTo: typeof operators.mapTo
  readonly merge: typeof operators.merge
  readonly mergeAll: typeof operators.mergeAll
  readonly mergeMap: typeof operators.mergeMap
  readonly multicast: typeof operators.multicast
  readonly partition: typeof operators.partition
  readonly pluck: typeof operators.pluck
  readonly publish: typeof operators.publish
  readonly race: typeof operators.race
  readonly retry: typeof operators.retry
  readonly retryWhen: typeof operators.retryWhen
  readonly sample: typeof operators.sample
  readonly scan: typeof operators.scan
  readonly share: typeof operators.share
  readonly single: typeof operators.single
  readonly skip: typeof operators.skip
  readonly skipUntil: typeof operators.skipUntil
  readonly skipWhile: typeof operators.skipWhile
  readonly startWith: typeof operators.startWith
  readonly switchMap: typeof operators.switchMap
  readonly take: typeof operators.take
  readonly takeUntil: typeof operators.takeUntil
  readonly takeWhile: typeof operators.takeWhile
  readonly throttle: typeof operators.throttle
  readonly throttleTime: typeof operators.throttleTime
  readonly timeout: typeof operators.timeout
  readonly window: typeof operators.window
  readonly windowCount: typeof operators.windowCount
  readonly windowTime: typeof operators.windowTime
  readonly windowToggle: typeof operators.windowToggle
  readonly windowWhen: typeof operators.windowWhen
  readonly withLatestFrom: typeof operators.withLatestFrom
  readonly zip: typeof operators.zip
}

import {ThrottleConfig} from 'rxjs/operators/throttle'
import {GroupedObservable} from 'rxjs/operators/groupBy'
import {IScheduler} from 'rxjs/Scheduler'
import {Subject} from 'rxjs/Subject'
import {NextObserver, ErrorObserver, CompletionObserver} from 'rxjs/Observer'
import {Observable, Subscribable} from 'rxjs/Observable'
import {ConnectableObservable} from 'rxjs/observable/ConnectableObservable'
import {ErrorObservable} from 'rxjs/observable/ErrorObservable'

export {
  ConnectableObservable,
  ErrorObservable,
  GroupedObservable,
  IScheduler,
  NextObserver,
  Observable,
  Subject,
  Subscribable,
  ThrottleConfig,
}
