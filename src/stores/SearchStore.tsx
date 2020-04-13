import { observable, action } from "mobx";
import RootStore from "./RootStore";

export default class SearchStore {
  rootStore: RootStore;
  constructor(rs: RootStore) {
    this.rootStore = rs;
  }
  @observable name: string = "";
  @observable age: number = 0;
  @observable totalUsers: number = 0;

  @action changeName(value: string) {
    this.name = value;
  }
  @action changeAge(value: number) {
    this.age = value;
  }
}
