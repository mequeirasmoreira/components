"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { InformationCircleIcon } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function WithLinkOnRight() {
    const name = "Link a direita";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = `
    import { InformationCircleIcon } from '@heroicons/react/16/solid';

    <div className="my-10 flex h-full w-full items-center justify-center px-3">
        <div className="flex min-w-[296px] max-w-[864px] items-start w-full rounded-md bg-blue-50 p-4">
            <div className="mr-3 max-h-[20px] min-w-[20px] text-blue-500">
                <InformationCircleIcon />
            </div>
            <div className="flex justify-between w-full max-h-[108] h-fit shrink-grow-basis-0 text-sm">
                <p className="text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
                <a 
                    className="font-medium text-blue-700 hover:text-blue-500"
                    href="#"
                >Details
                <span aria-hidden="true"> →</span>
                </a>
            </div>
        </div>
    </div>
    `

    const codeHTMLString = `
    <div class="my-10 flex h-full w-full items-center justify-center px-3">
        <div class="flex min-w-[296px] max-w-[864px] items-start w-full rounded-md bg-blue-50 p-4">
            <div class="mr-3 max-h-[20px] min-w-[20px] text-blue-500">
                <InformationCircleIcon />
            </div>
            <div class="flex justify-between w-full max-h-[108] h-fit shrink-grow-basis-0 text-sm">
                <p class="text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
                <a 
                    class="font-medium text-blue-700 hover:text-blue-500"
                    href="#"
                >Details
                <span aria-hidden="true"> →</span>
                </a>
            </div>
        </div>
    </div>
    `

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
                    <div className="flex min-w-[296px] max-w-[864px] items-start w-full rounded-md bg-blue-50 p-4">
                        <div className="mr-3 max-h-[20px] min-w-[20px] text-blue-500">
                            <InformationCircleIcon />
                        </div>
                        <div className="flex justify-between w-full max-h-[108] h-fit shrink-grow-basis-0 text-sm">
                            <p className="text-blue-700">A new software update is available. See what’s new in version 2.0.4.</p>
                            <a 
                                className="font-medium text-blue-700 hover:text-blue-500"
                                href="#"
                            >Details
                            <span aria-hidden="true"> →</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </BasicStructure>
    );
}