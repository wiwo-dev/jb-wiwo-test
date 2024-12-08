"use client";

import { SimpleTreeItemWrapper, SortableTree, TreeItemComponentProps, TreeItems } from "dnd-kit-sortable-tree";
import { FlattenedItem } from "dnd-kit-sortable-tree/dist/types";
import React, { useState } from "react";

type MinimalTreeItemData = {
  value: string;
};

const initialViableMinimalData: TreeItems<MinimalTreeItemData> = [
  {
    id: 1,
    value: "Jane",
    children: [
      { id: 4, value: "John" },
      { id: 5, value: "Sally" },
    ],
  },
  { id: 2, value: "Fred", children: [{ id: 6, value: "Eugene" }] },
  { id: 3, value: "Helen" },
];

//item can be dropped only if it has no children
function checkIfDragItemHasNoChildren(dragItem: FlattenedItem<MinimalTreeItemData>) {
  if (dragItem.children && dragItem.children.length > 0) return false;
  return true;
}

function setChildrenCanHaveChildrenFalse(items: TreeItems<MinimalTreeItemData>) {
  const newItems = [...items];
  newItems.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        child.canHaveChildren = false;
      });
    }
    item.canHaveChildren = checkIfDragItemHasNoChildren;
  });
  return newItems;
}

/*
 * Here's the component that will render a single row of your tree
 */
const TreeItem = React.forwardRef<HTMLDivElement, TreeItemComponentProps<MinimalTreeItemData>>((props, ref) => {
  if (props.item.value === "Helen") console.log("props: ", props);
  return (
    <SimpleTreeItemWrapper
      {...props}
      manualDrag={true}
      ref={ref}
      hideCollapseButton={true}
      showDragHandle={false}
      disableCollapseOnItemClick={true}
      //disableInteraction={props.item.value === "Helen"}
      //disableSelection={props.item.value === "Helen"}
      //disableSorting={props.item.value === "Helen"}
    >
      <div {...props.handleProps}>XXX</div>
      <div className={props.depth > 0 ? "pl-8" : ""}>
        {props.depth > 0 && "--->"}
        {props.item.value}
      </div>
    </SimpleTreeItemWrapper>
  );
});

TreeItem.displayName = "TreeItem";

export default function ClientPage() {
  const [items, setItems] = useState(setChildrenCanHaveChildrenFalse(initialViableMinimalData));

  const handleItemsChanged = (newItems: TreeItems<MinimalTreeItemData>) => {
    setItems(setChildrenCanHaveChildrenFalse(newItems));
  };

  return (
    <div className="w-1/2 p-5">
      <SortableTree
        dropAnimation={null}
        sortableProps={{ animateLayoutChanges: () => false }}
        items={items}
        onItemsChanged={handleItemsChanged}
        //TreeItemComponent={({ ...props }) => <TreeItem {...props} />}
        TreeItemComponent={TreeItem}
        indentationWidth={20}
      />
    </div>
  );
}
