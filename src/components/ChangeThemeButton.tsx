import { MoonOutline, SunOutline } from "@graywolfai/react-heroicons";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useThemeSwitch } from "../hooks/useThemeSwitch";

const buttonVariants: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

function ChangeThemeButton() {
  const { theme, changeTheme } = useThemeSwitch();

  return (
    <AnimatePresence exitBeforeEnter>
      {theme === "dark" ? (
        <motion.button
          key={1}
          className="flex items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
          onClick={changeTheme}
        >
          <p className="mr-4 text-sm tracking-widest font-bold text-white">LIGHT</p>
          <SunOutline color="#ffffff" width={20} />
        </motion.button>
      ) : (
        <motion.button
          key={2}
          className="flex items-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
          onClick={changeTheme}
        >
          <p className="mr-4 text-sm tracking-widest font-bold text-slate-900">DARK</p>
          <MoonOutline color="#000000" width={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ChangeThemeButton;
