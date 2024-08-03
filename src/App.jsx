import { useState } from "react";
import Tray from "./Components/Tray";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const trayOpen = () => {
    setIsTrayOpen(!isTrayOpen);
  };
  return (
    <>
      <main>
        <section className="relative h-screen overflow-hidden bg-midnight-900">
          <div className="mx-auto flex h-full w-90% max-w-screen-2xl flex-col items-center justify-center overflow-hidden">
            <button
              className="hover:bg-midnight-700 flex flex-col rounded-lg border border-midnight-900 bg-midnight-850 px-4 py-2 font-medium text-white transition-colors"
              onClick={trayOpen}
            >
              <span>Open tray</span>
            </button>
          </div>
          <AnimatePresence>
            {isTrayOpen && <Tray setIsTrayOpen={setIsTrayOpen} />}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}

export default App;
