"use client"

import { CodeBracketIcon } from '@heroicons/react/16/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type ButtonToggleProps = {
    onPreviewClick: () => void;
    onCodeClick: () => void;
    previewActive: boolean;
};

export default function ButtonToggle({ onPreviewClick, onCodeClick }: ButtonToggleProps) {
    const [previewActive, setPreviewActive] = useState(true);

    const handlePreviewClick = () => {
        setPreviewActive(true);
        onPreviewClick();
    };

    const handleCodeClick = () => {
        setPreviewActive(false);
        onCodeClick();
    };

    return (
        <div className="flex p-1 bg-slate-100 rounded-md">
            <button
                className={`flex items-center justify-center gap-1.5 rounded-md px-2 py-1 font-medium ${
                    previewActive ? 'bg-white text-sky-500' : 'text-gray-500'
                }`}
                onClick={handlePreviewClick}
            >
                <div className="max-h-[20px] min-w-[20px]">
                    <EyeIcon />
                </div>
                Preview
            </button>
            <button
                className={`py-2 gap-2 px-2 justify-center items-center rounded-md font-semibold text-sm focus:outline-none flex ${
                    !previewActive ? 'bg-white text-sky-500' : 'text-gray-500'
                }`}
                onClick={handleCodeClick}
            >
                <div className="max-h-[20px] min-w-[20px]">
                    <CodeBracketIcon />
                </div>
                Code
            </button>
        </div>
    );
}