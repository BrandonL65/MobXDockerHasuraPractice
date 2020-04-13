import React, { useContext } from "react";
import { rootStore } from "../stores/RootStore";
import { observer } from "mobx-react";

export const Search = observer(() => {
  const store = useContext(rootStore);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "name":
        store.searchStore.changeName(e.currentTarget.value);
        break;
      case "age":
        store.searchStore.changeAge(parseInt(e.currentTarget.value));
        break;
    }
  };
  const seeAllUsers = () => {
    store.listUsers().then((users) => {
      if (users.data) {
        console.log(users.data);
      }
    });
  };

  const addUser = () => {
    const { searchStore } = store;
    store.addUser(searchStore.name, searchStore.age).then((data) => {
      console.log(data);
      store.searchStore.totalUsers += 1;
      console.log(store.searchStore.totalUsers);
    });
  };

  return (
    <div>
      <input
        name="name"
        onChange={(e) => handleChange(e)}
        placeholder="Please enter your name"
      ></input>
      <input
        name="age"
        onChange={(e) => handleChange(e)}
        placeholder="Please enter your age"
      ></input>
      <h1>{store.searchStore.name}</h1>
      <h1>{store.searchStore.age}</h1>
      <button onClick={seeAllUsers}>See All Users</button>
      <button onClick={addUser}>Add user</button>
    </div>
  );
});
