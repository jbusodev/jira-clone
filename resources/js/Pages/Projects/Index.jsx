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

            <div className="container max-w-7xl mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        projects.map(project =>
                            <Project key={project.id} project={project} />
                        )
                    }
                    {/* Project Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-2">Project 1</h2>
                        <p className="text-gray-600 mb-4">Description of Project 1</p>
                        <a href="#" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                    {/* Project Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-2">Project 2</h2>
                        <p className="text-gray-600 mb-4">Description of Project 2</p>
                        <a href="#" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                    {/* Project Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-2">Project 3</h2>
                        <p className="text-gray-600 mb-4">Description of Project 3</p>
                        <a href="#" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                    {/* Add more project cards as needed */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}