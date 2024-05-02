import { motion } from 'framer-motion'

import CreateTodoForm from '@/components/todos/todo-form'
import TodoList from '@/components/todos/todo-list'
import { TitleLayout } from '@/layouts/title-layout'

export const AmplifyGen2TestPage = () => {
  return (
    <TitleLayout title="Amplify Gen2 Test" description="This is test for the new Amplify Gen2 API.">
      <motion.section
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <CreateTodoForm />

        <TodoList />
      </motion.section>
    </TitleLayout>
  )
}
