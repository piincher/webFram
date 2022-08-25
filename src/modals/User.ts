interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callBack: Callback) {
    const handlers = this.events[eventName] || [];

    handlers.push(callBack);
    this.events[eventName] = handlers;
  }
}
