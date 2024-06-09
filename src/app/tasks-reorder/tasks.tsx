"use client";

import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { Item } from "./item";
import { SingleHorizontal } from "./single-horizontal";

export type AgendaItemDisplayed = {
  value: string;
  isChild: boolean;
};

const testAgendaItems: AgendaItemDisplayed[] = [
  { value: "topic-1", isChild: false },
  { value: "topic-2", isChild: false },
  { value: "topic-3", isChild: true },
  { value: "topic-4", isChild: true },
  { value: "topic-5", isChild: true },
  { value: "topic-6", isChild: false },
  { value: "topic-7", isChild: false },
];

type Props = {};

export default function Tasks({}: Props) {
  const [items, setItems] = useState(testAgendaItems);

  const handleSetItemChild = (value: string, isChild: boolean) => {
    const updatedItems = [...items];
    const indexToUpdate = updatedItems.findIndex((item) => item.value === value);
    if (indexToUpdate === -1) return;
    //can't set first element as child
    if (indexToUpdate === 0 && isChild) {
      updatedItems[indexToUpdate].isChild = false;
      setItems(updatedItems);
      return;
    }
    updatedItems[indexToUpdate].isChild = isChild;
    setItems(updatedItems);
  };

  return (
    <div className="grid grid-cols-2">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Item key={item.value} value={item} item={item} handleSetItemChild={handleSetItemChild}>
            {item.value}
          </Item>
        ))}
      </Reorder.Group>
      <pre className="text-sm bg-gray-300 p-5 rounded-md">{JSON.stringify(convertData(items), null, 2)}</pre>
    </div>
  );
}

function convertData(data: AgendaItemDisplayed[]) {
  const result: any = [];

  //if needed correct firts item. it can not be a child
  if (data[0].isChild) {
    data[0].isChild = false;
  }

  for (const item of data) {
    if (item.isChild) {
      const parent = result[result.length - 1];
      parent.children.push({ uuid: item.value });
    } else {
      result.push({ uuid: item.value, children: [] });
    }
  }
  return result;
}
