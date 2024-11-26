"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"

export default function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (res.ok) {
            router.push('/')
        } else {
            console.error(await res.json())
        }
    }


return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        >
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Se connecter</h2>
            <div className="mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
                Se connecter
            </button>
            <p className="mt-4 text-sm text-gray-600">
                    Vous n'avez pas de compte ?{" "}
                    <Link
                        href="/auth/register"
                        className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                        Créez-en un ici
                    </Link>
                </p>
        </form>
    </div>
);
}