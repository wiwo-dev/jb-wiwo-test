import { motion, useDragControls } from "framer-motion";

type Props = {};

export function SingleHorizontal({}: Props) {
  const horizontalControl = useDragControls();

  return (
    <motion.div
      className="w-[500px] rounded-md bg-violet-300 p-4 my-1 flex items-center gap-3"
      drag="x"
      dragControls={horizontalControl}
      dragConstraints={{ left: -50, right: 50 }}
      dragSnapToOrigin={true}
      dragListener={false}>
      <div className="" onPointerDown={(e) => horizontalControl.start(e)}>
        |||
      </div>
      <div className="">SingleHorizontal</div>
    </motion.div>
  );
}
