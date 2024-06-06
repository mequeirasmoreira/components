"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { XCircleIcon } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function WithList() {
    const name = "Lista";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = 
`import { XCircleIcon } from '@heroicons/react/16/solid';
    
<div className="my-10 flex h-full w-full items-center justify-center px-3">
    <div className="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-red-50 p-4">
        <div className="mr-3 max-h-[20px] min-w-[20px] text-red-500">
            <XCircleIcon />
        </div>
        <div className="max-h-[108] min-h-[68px] w-[1269]">
            <h3 className="mb-2 font-medium text-red-800 text-sm">There were 2 errors with your submission</h3>
            <ul className="text-red-700 list-disc text-sm">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
        </div>
    </div>
</div>`

    const codeHTMLString = 
`<div class="my-10 flex h-full w-full items-center justify-center px-3">
    <div class="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-red-50 p-4">
        <div class="mr-3 max-h-[20px] min-w-[20px] text-red-500">
            <XCircleIcon />
        </div>
        <div class="max-h-[108] min-h-[68px] w-[1269]">
            <h3 class="mb-2 font-medium text-red-800 text-sm">There were 2 errors with your submission</h3>
            <ulclass="text-red-700 list-disc text-sm">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
            </ulclass=>
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
                    <div className="flex min-w-[296px] max-w-[864px] w-full rounded-md items-start bg-red-50 p-4">
                        <div className="mr-3 max-h-[20px] min-w-[20px] text-red-500">
                            <XCircleIcon />
                        </div>
                        <div className="max-h-[108] min-h-[68px] w-[1269]">
                            <h3 className="mb-2 font-medium text-red-800 text-sm">There were 2 errors with your submission</h3>
                            <ul
                                className="text-red-700 list-disc text-sm"
                            >
                                <li>Your password must be at least 8 characters</li>
                                <li>Your password must include at least one pro wrestling finishing move</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </BasicStructure>
    );
}