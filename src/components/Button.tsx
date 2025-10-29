'use client'
import { useEffect, useState } from "react"

type User ={
    id: number
    name: string
    email: string
}

export default function Button ({title}:{title:string}) {
    const[state, setState] = useState(0)
    const[user, setUser] = useState<User | null>(null)

    useEffect(() => {
        console.log('Button component mounted')
        const fetchUser = async () => {
            const response = await fetch('/api/user')
            const data = await response.json()
            setUser(data)
        }

        fetchUser()

        return() => {
            console.log('Button component unmounted')
        }
    }, [])

    return(
        <>
            <button onClick= {() => setState(state + 1)}>
                {title} - {state} 
            </button>


            {user && (
                <div>
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                </div>
            )}
        </>
    )
}