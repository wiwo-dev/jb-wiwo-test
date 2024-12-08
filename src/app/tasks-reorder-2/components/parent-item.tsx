import React from "react";
import { Item } from "../tasks-reorder-2-client";

import { motion, PanInfo } from "framer-motion";

type Props = {
  //children: React.ReactNode;
  uuid: string;
  subitems: Item[];
  changeItemFromChildToParent: (uuid: string) => void;
};

export default function ParentItem({ uuid, subitems, changeItemFromChildToParent }: Props) {
  const handleHorizontalDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, subitem: Item) => {
    if (info.offset.x > 30) {
      //handleSetItemChild(item.value, true);
    } else if (info.offset.x < -10) {
      changeItemFromChildToParent(subitem.uuid);
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="p-3 rounded-md bg-orange-500">P {uuid}</div>
      {subitems.map((subitem, index) => (
        <motion.div
          key={subitem.uuid}
          className="p-3 rounded-md bg-orange-300"
          drag="x"
          //dragControls={horizontalControls}
          dragConstraints={{ left: -50, right: 50 }}
          dragSnapToOrigin={true}
          //dragListener={false}
          onDrag={(event, info) => handleHorizontalDrag(event, info, subitem)}>
          C {subitem.uuid}
        </motion.div>
      ))}
    </div>
  );
}
