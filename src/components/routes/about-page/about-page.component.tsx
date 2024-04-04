import { TitleLayout } from "@/components/layouts/title-layout"
import { motion } from "framer-motion"

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

          <ul className="list-disc pl-8">
            <li>React + Vite - "Framework"</li>
            <li>Tanstack Router - Routing</li>
            <li>Tanstack Query - Fetching/caching</li>
            <li>ShadcnUI - UI components</li>
            <li>Tailwind CSS - CSS</li>
            <li>framer-motion - Animations</li>
            <li>Vitest - Testing</li>
          </ul>
        </div>
      </motion.section>
    </TitleLayout>
  )
}
