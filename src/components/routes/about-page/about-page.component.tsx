import { motion } from 'framer-motion'

import { TitleLayout } from '@/components/layouts/title-layout'

export const AboutPageComponent = () => {
  return (
    <TitleLayout
      title="About"
      description="This is a demo app that fetches notable people birthdays from Wiki API and displays them."
    >
      <motion.section
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Tech used in this app:
          </h2>

          <ul className="list-disc pl-20 mt-2">
            <li>
              <span className="font-semibold">React + Vite</span> - "Framework"
            </li>
            <li>
              <span className="font-semibold">Tanstack Router</span> - Routing
            </li>
            <li>
              <span className="font-semibold">Tanstack Query</span> - Fetching/caching
            </li>
            <li>
              <span className="font-semibold">Zustand</span> - State management
            </li>
            <li>
              <span className="font-semibold">ShadcnUI</span> - UI components
            </li>
            <li>
              <span className="font-semibold">Tailwind CSS</span> - CSS
            </li>
            <li>
              <span className="font-semibold">framer-motion</span> - Animations
            </li>
            <li>
              <span className="font-semibold">Vitest</span> - Testing
            </li>
          </ul>
        </div>
      </motion.section>
    </TitleLayout>
  )
}
