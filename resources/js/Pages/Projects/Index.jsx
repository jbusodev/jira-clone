import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import Project from '@/Components/Project';
// import ProjectsList from './components/projects/ProjectsList';


export default function Index({ auth, projects }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>}
        >
            <Head title="Projects" />

            <div className="container max-w-7xl mx-auto">
                {
                    projects.map(project =>
                        <Project key={project.id} project={project} />
                    )
                }
                <div className='py-8'>
                    <div className='px-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-sm font-bold">Pinned Projects</h2>
                            <button type="button" className="flex-none h-9 items-center justify-center bg-green-500 rounded-md text-white hover:text-gray-200 focus:outline-none">
                                <span className="px-4">New Project +</span>
                            </button>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                            <li className="flex rounded-md">
                                <div className="text-sm bg-pink-600 w-16 rounded-l-md flex items-center justify-center text-white font-bold">GA</div>
                                <div className="text-sm flex flex-1 items-center rounded-r-md border-t border-b border-r">
                                    <div className="flex-1 px-4 py-2">
                                        <a href="#" className="text-gray-200 hover:text-gray-600 font-semibold">Graph API</a>
                                        <p className="text-gray-500">16 Members</p>
                                    </div>
                                    <div>
                                        <button type="button" className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none">
                                            <span className="absolute w-1 h-1 p-0 m-1 overflow-hidden clip whitespace-nowrap border-0">Open options</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block">
                                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="flex rounded-md">
                                <div className="text-sm bg-yellow-400 w-16 rounded-l-md flex items-center justify-center text-white font-bold">CD</div>
                                <div className="text-sm flex flex-1 items-center rounded-r-md border-t border-b border-r">
                                    <div className="flex-1 px-4 py-2">
                                        <a href="#" className="text-gray-200 hover:text-gray-600 font-semibold">Component Design</a>
                                        <p className="text-gray-500">12 Members</p>
                                    </div>
                                    <div>
                                        <button type="button" className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none">
                                            <span className="absolute w-1 h-1 p-0 m-1 overflow-hidden clip whitespace-nowrap border-0">Open options</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block">
                                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-8'>
                    <div className='px-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className="text-sm font-bold">All Projects</h2>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                            <li className="flex rounded-md">
                                <div className="text-sm bg-orange-300 w-16 rounded-l-md flex items-center justify-center text-white font-bold">P1</div>
                                <div className="text-sm flex flex-1 items-center rounded-r-md border-t border-b border-r">
                                    <div className="flex-1 px-4 py-2">
                                        <a href="#" className="text-gray-200 hover:text-gray-600 font-semibold">Project 1</a>
                                        <p className="text-gray-500">2 Members</p>
                                    </div>
                                    <div>
                                        <button type="button" className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none">
                                            <span className="absolute w-1 h-1 p-0 m-1 overflow-hidden clip whitespace-nowrap border-0">Open options</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block">
                                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="flex rounded-md">
                                <div className="text-sm bg-blue-600 w-16 rounded-l-md flex items-center justify-center text-white font-bold">P2</div>
                                <div className="text-sm flex flex-1 items-center rounded-r-md border-t border-b border-r">
                                    <div className="flex-1 px-4 py-2">
                                        <a href="#" className="text-gray-200 hover:text-gray-600 font-semibold">Project 2</a>
                                        <p className="text-gray-500">6 Members</p>
                                    </div>
                                    <div>
                                        <button type="button" className="flex h-8 w-8 items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none">
                                            <span className="absolute w-1 h-1 p-0 m-1 overflow-hidden clip whitespace-nowrap border-0">Open options</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block">
                                                <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}