import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage } from '@inertiajs/react';

function ProjectsList({ projects }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: project.message,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('projects.update', chirp.id), { onSuccess: () => setEditing(false) });
    };

    return (
        <div>
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-semibold mb-4">Available Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>
    );
};

export default ProjectsList;
