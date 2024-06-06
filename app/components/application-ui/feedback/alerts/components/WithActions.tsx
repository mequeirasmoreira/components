"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { CheckCircleIcon } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function WithActions() {
    const name = "Ações / Botões";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = 
`import { CheckCircleIcon } from '@heroicons/react/16/solid';

<div className="my-10 flex h-full w-full items-center justify-center px-3">
    <div className="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-green-50 p-4">
        <div className="mr-3 max-h-[20px] min-w-[20px] text-green-500">
            <CheckCircleIcon />
        </div>
        <div className="max-h-[108] min-h-[68px] w-[1269] text-sm">
            <h3 className="mb-2 font-medium text-green-800">Order completed</h3>
            <p className="text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            <div className="flex gap-3 ml-[-10px] mt-[10px]">
                <button className="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50">
                    View status
                </button>
                <button className="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50">
                    Dismiss
                </button>
            </div>
        </div>
    </div>
</div>`

    const codeHTMLString = 
`<div class="my-10 flex h-full w-full items-center justify-center px-3">
    <div class="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-green-50 p-4">
        <div class="mr-3 max-h-[20px] min-w-[20px] text-green-500">
            <CheckCircleIcon />
        </div>
        <div class="max-h-[108] min-h-[68px] w-[1269] text-sm">
            <h3 class="mb-2 font-medium text-green-800">Order completed</h3>
            <p class="text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            <div class="flex gap-3 ml-[-10px] mt-[10px]">
                <button class="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50">
                    View status
                </button>
                <button class="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50">
                    Dismiss
                </button>
            </div>
        </div>
    </div>
</div>`

    const [code, setCode] = useState(codeHTMLString)

    const handleLanguageChange = (language: string) => {
        setCodeLanguage(language);
        if (language === 'html') {
            setCode(codeHTMLString)
        } else if (language === 'react') {
            setCode(codeReactString)
        }
    };

    const toggleView = () => {
        setShowCode(!showCode); 
    };

    const handlePreviewClick = () => {
        setShowCode(false);
    };

    const handleCodeClick = () => {
        setShowCode(true);
    };

    return (
        <BasicStructure
            name={name}
            onPreviewClick={handlePreviewClick}
            onCodeClick={handleCodeClick}
            previewActive={showCode}
            text={code}
            onChangeLanguage={handleLanguageChange}
        >
            {showCode ? ( 
        
                <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable} showLineNumbers>
                    {code}
                </SyntaxHighlighter>
            ) : (
                <div className="my-10 flex h-full w-full items-center justify-center px-3">
                        <div className="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-green-50 p-4">
                            <div className="mr-3 max-h-[20px] min-w-[20px] text-green-500">
                                <CheckCircleIcon />
                            </div>
                            <div className="max-h-[108] min-h-[68px] w-[1269] text-sm">
                                <h3 className="mb-2 font-medium text-green-800">Order completed</h3>
                                <p className="text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                                <div className="flex gap-3 ml-[-10px] mt-[10px]">
                                    <button
                                        className="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50"
                                    >View status</button>
                                    <button
                                        className="text-green-800 font-medium px-2 py-[6px] focus:border-green-700 focus:border-2 hover:bg-green-100 rounded-xl border-2 border-green-50"
                                    >Dismiss</button>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </BasicStructure>
    );
}