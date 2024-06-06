"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function NomeDoComponente() {
    const name = "Link e borda (direita)";
    const [showCode, setShowCode] = useState(false);
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = `
    import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'

    <div className=" my-10 flex h-full w-full items-center justify-center px-3">
        <div className="border-l-4 border-yellow-400 flex min-w-[296px] max-w-[864px] items-start w-full bg-yellow-50 p-4">
            <div className="mr-3 max-h-[20px] min-w-[20px] text-yellow-500">
                <ExclamationTriangleIcon />
            </div>
            <div className='flex'>
                <p className='text-yellow-700 text-sm'>
                    You have no credits left. <a href="#" className='text-yellow-700 hover:text-yellow-600 underline underline-offset-1 font-medium text-sm'>Upgrade your account to add more credits.</a>
                    </p>
            </div>
        </div>
    </div>
    `

    const codeHTMLString = `
    <div class=" my-10 flex h-full w-full items-center justify-center px-3">
        <div class="border-l-4 border-yellow-400 flex min-w-[296px] max-w-[864px] items-start w-full bg-yellow-50 p-4">
            <div class="mr-3 max-h-[20px] min-w-[20px] text-yellow-500">
                <ExclamationTriangleIcon />
            </div>
            <div class='flex'>
                <p class='text-yellow-700 text-sm'>
                    You have no credits left. <a href="#" class='text-yellow-700 hover:text-yellow-600 underline underline-offset-1 font-medium text-sm'>Upgrade your account to add more credits.</a>
                    </p>
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
                <div className=" my-10 flex h-full w-full items-center justify-center px-3">
                    <div className="border-l-4 border-yellow-400 flex min-w-[296px] max-w-[864px] items-start w-full bg-yellow-50 p-4">
                        <div className="mr-3 max-h-[20px] min-w-[20px] text-yellow-500">
                            <ExclamationTriangleIcon />
                        </div>
                        <div className='flex'>
                            <p className='text-yellow-700 text-sm'>
                                You have no credits left. <a href="#" className='text-yellow-700 hover:text-yellow-600 underline underline-offset-1 font-medium text-sm'>Upgrade your account to add more credits.</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </BasicStructure>
    );
}