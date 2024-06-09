import React, { HTMLAttributes, useState } from "react";
import { motion, PanInfo, Reorder, useDragControls } from "framer-motion";
import { AgendaItemDisplayed } from "./tasks";

import { cn } from "@/utils/utils";

type Props = {
  value: any;
  children: React.ReactNode;
  item: AgendaItemDisplayed;
  handleSetItemChild: (value: string, isChild: boolean) => void;
};

export function Item({ children, value, item, handleSetItemChild }: Props) {
  //const [isChild, setIsChild] = useState(false);

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    //console.log(info.point.x, info.point.y);
    if (info.offset.x > 30) {
      //  setIsChild(true);
      handleSetItemChild(item.value, true);
    } else if (info.offset.x < -10) {
      //  setIsChild(false);
      handleSetItemChild(item.value, false);
    }
  };

  const reorderControls = useDragControls();
  const horizontalControls = useDragControls();

  return (
    <Reorder.Item value={value} dragListener={false} dragControls={reorderControls}>
      <motion.div
        drag="x"
        dragControls={horizontalControls}
        dragConstraints={{ left: -50, right: 50 }}
        dragSnapToOrigin={true}
        dragListener={false}
        onDrag={handleDrag}
        className={cn(
          "w-[500px] rounded-md bg-orange-300 p-4 my-1 flex items-center gap-3 select-none",
          item.isChild && "bg-orange-200 py-3"
        )}>
        <div
          className="cursor-move drag-handle"
          onPointerDown={(e) => {
            console.log(e);
            horizontalControls.start(e);
            reorderControls.start(e);
          }}>
          |||
        </div>
        <div className={item.isChild ? "pl-5" : ""}>
          {children} {item.isChild ? "<sub item>" : ""}
        </div>
      </motion.div>
    </Reorder.Item>
  );
}
