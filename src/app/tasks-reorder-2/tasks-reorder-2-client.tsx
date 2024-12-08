"use client";

import { useState } from "react";
import ParentItem from "./components/parent-item";
import { Reorder } from "framer-motion";
import { Item } from "../tasks-reorder/item";

type Props = {};

export type Item = {
  uuid: string;
  subitems?: Item[];
};

const initialItems: Item[] = [
  {
    uuid: "topic-1",
    subitems: [],
  },
  {
    uuid: "topic-2",
    subitems: [
      {
        uuid: "topic-3",
      },
      {
        uuid: "topic-4",
      },
      {
        uuid: "topic-5",
      },
    ],
  },
  {
    uuid: "topic-6",
    subitems: [],
  },
  {
    uuid: "topic-7",
    subitems: [],
  },
];

export default function TasksReorderClient2({}: Props) {
  const [items, setItems] = useState(initialItems);

  const changeItemFromChildToParent = (uuid: string) => {
    console.log(uuid);
    const updatedItems = [...items];
    //remove item from subitems
    const parentIndex = updatedItems.findIndex((item) => item.subitems?.some((subitem) => subitem.uuid === uuid));
    console.log("parentIndex: ", parentIndex);
    if (parentIndex === -1) return;
    const subitemIndex = updatedItems[parentIndex].subitems?.findIndex((subitem) => subitem.uuid === uuid);
    if (subitemIndex === -1 || subitemIndex === undefined) return;
    const subitem = updatedItems[parentIndex].subitems?.splice(subitemIndex, 1);
    //add item to parent after the previous parent
    if (subitem === undefined) return;
    updatedItems.splice(parentIndex + 1, 0, subitem[0]);
    setItems(updatedItems);
  };

  return (
    <div className="w-1/2 flex flex-col gap-4 p-5">
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Reorder.Item key={item.uuid} value={item}>
            <ParentItem
              key={item.uuid}
              uuid={item.uuid}
              subitems={item.subitems || []}
              changeItemFromChildToParent={changeItemFromChildToParent}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
