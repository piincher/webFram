import { AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	set(value: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
	fetch(id: number): AxiosResponse;
	save(data: T): AxiosResponse;
}
type CallBack = () => void;

interface Events {
	on(eventName: string, callBack: CallBack): void;
	trigger(eventName: string): void;
}
