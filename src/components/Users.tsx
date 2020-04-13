import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { rootStore } from "../stores/RootStore";

type User = {
  name: string;
  age: number;
};

export const Users = observer(() => {
  const [users, setUsers] = useState<Array<User>>([]);
  const store = useContext(rootStore);

  useEffect(() => {
    store.listUsers().then((users) => {
      let allUsers = users.data.user.map((u: any) => {
        return (
          <div>
            <p>{u.name}</p>
            <p>{u.age}</p>
          </div>
        );
      });
      setUsers(allUsers);
    });
  }, [store.searchStore.totalUsers]);

  return (
    <div>
      <h1>All Users</h1>
      {users}
    </div>
  );
});
