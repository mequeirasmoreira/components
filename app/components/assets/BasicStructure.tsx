"use client"

import { ReactNode, useState } from "react";
import { ClipboardDocumentCheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import DropdownComponent from "./DropdownComponent"
import ButtonToggle from "./ButtonToggle";

type BasicStructureProps = {
    name: string,
    children: React.ReactNode,
    onPreviewClick: () => void,
    onCodeClick: () => void,
    previewActive: boolean,
    text: string,
    onChangeLanguage: (language: string) => void
};

const BasicStructure: React.FC<BasicStructureProps> = ({ 
    name, 
    children, 
    onPreviewClick, 
    onCodeClick, 
    previewActive, 
    text,
    onChangeLanguage,
}) => {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col justify-center max-w-[1296px] min-w-[360px] mx-auto mt-4 mb-16 gap-3">
            <div className="flex justify-between">
                <p className="font-medium text-slate-900 text-base">{name}</p>
                <div className='flex justify-evenly gap-4'>
                    <ButtonToggle
                        onPreviewClick={onPreviewClick}
                        onCodeClick={onCodeClick}
                        previewActive={previewActive}
                    />
                    <DropdownComponent onChangeLanguage={onChangeLanguage}/>
                    <button onClick={copyToClipboard} className="flex rounded-md bg-slate-100 p-1">
            {copied ?
                (
                    <div className='flex items-center justify-center gap-1.5 rounded-md px-2 py-1 font-medium bg-white text-sky-500'>
                        <span>Copied</span>
                        <div className="max-h-[20px] min-w-[20px]">
                            <ClipboardDocumentCheckIcon />
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center gap-1.5 rounded-md px-2 py-1 font-medium text-gray-500'>
                        <span>Copy</span>
                        <div className="max-h-[20px] min-w-[20px]">
                            <ClipboardIcon />
                        </div>
                    </div>
                )}
        </button>
                </div>
            </div>
            <div className='relative' id='resizable-container'>
                <div className='border-[1px] rounded-md border-gray-200 max-w-[1296px] min-w-[360px] resize-x relative'>
                    {children}
                </div>       
            </div>
        </div>
    );
};

export default BasicStructure;