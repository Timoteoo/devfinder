import { useThemeSwitch } from "../hooks/useThemeSwitch";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { SunOutline, MoonOutline } from "@graywolfai/react-heroicons";

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

function ToggleThemeButton() {
  const { setTheme, theme } = useThemeSwitch();

  function handleClick() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div className="flex items-center">
      <AnimatePresence exitBeforeEnter initial={false}>
        {theme === "light" ? (
          <motion.button
            key={1}
            className="flex items-center"
            onClick={handleClick}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="mr-4 text-sm tracking-widest font-bold text-slate-900">DARK</p>
            <MoonOutline color="#000000" width={20} />
          </motion.button>
        ) : (
          <motion.button
            key={2}
            className="flex items-center"
            onClick={handleClick}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="mr-4 text-sm tracking-widest font-bold text-white">LIGHT</p>
            <SunOutline color="#ffffff" width={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ToggleThemeButton;
