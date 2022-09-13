import { AxiosResponse, AxiosPromise } from "axios";
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosResponse;
}

interface Events {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}

interface hasId {
  id?: number;
}
export class Model<T extends hasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("cannot fetch without an id");
    }
    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch((err) => console.log(err));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      });
  }
}
