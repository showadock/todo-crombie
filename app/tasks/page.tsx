import { auth } from '@/auth'
import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'
import { redirect } from 'next/navigation'
import React from 'react'

const Tasks = async () => {
    const session = await auth()

    if (!session) {
        console.log('No session')
        redirect('/')
    }

    return (
        <>
            <TaskForm />
            <TaskList />
        </>
    )
}

export default Tasks