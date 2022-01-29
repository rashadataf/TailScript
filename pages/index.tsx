import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Tailwind CSS + Typescript Boilerplate</title>
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold">Tailwind CSS + Typescript Boilerplate</h1>
                <p className="text-xl">
                    This is a boilerplate for a Tailwind CSS + Typescript project.
                </p>
            </main>
        </div>
    )
}