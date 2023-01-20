import React, { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country;
}

export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
      <h1>
        {props.name} is {props.isMarried ? "married" : "not married"}
      </h1>
      <h1>
        {props.friends.map((friend: string) => (
          <p>{friend}</p>
        ))}
      </h1>
      <h1>{props.country}</h1>
    </div>
  );
};
