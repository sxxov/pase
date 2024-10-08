import { type Subscriber } from './Subscriber.js';

export type ReadableSignal<T> = {
	get(): T;
	subscribe(subscriber: Subscriber<T>): () => void;
	subscribeDeferred(subscriber: Subscriber<T>): () => void;
	derive<U>(callback: (value: T) => U): ReadableSignal<U>;
};
