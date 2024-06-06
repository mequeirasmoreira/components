"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { CheckCircleIcon, XMarkIcon  } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function NomeDoComponente() {
    const name = "Botão Close";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = `import { CheckCircleIcon, XMarkIcon  } from '@heroicons/react/16/solid';

<div className="my-10 flex h-full w-full items-center justify-center px-3">
    <div className="flex w-full min-w-[296px] max-w-[864px] items-center justify-between rounded bg-green-50 px-4 py-2">
        <div className='flex gap-4'>
            <CheckCircleIcon className='size-5 text-green-400'/>
            <p className='text-sm font-medium text-green-800'>Successfully uploaded</p>
        </div>
        <button className='rounded p-2 hover:bg-green-100 focus:border-2 focus:border-green-500'>
            <XMarkIcon className='size-5 text-green-400'/>
        </button>
    </div>
</div>`

    const codeHTMLString = 
`<div Class="my-10 flex h-full w-full items-center justify-center px-3">
    <div Class="flex w-full min-w-[296px] max-w-[864px] items-center justify-between rounded bg-green-50 px-4 py-2">
        <div Class='flex gap-4'>
            <CheckCircleIcon Class='size-5 text-green-400'/>
            <p Class='text-sm font-medium text-green-800'>Successfully uploaded</p>
        </div>
            <button Class='rounded p-2 hover:bg-green-100 focus:border-2 focus:border-green-500'>
            <XMarkIcon Class='size-5 text-green-400'/>
        </button>
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
                    <div className="flex w-full min-w-[296px] max-w-[864px] items-center justify-between rounded bg-green-50 px-4 py-2">
                        <div className='flex gap-4'>
                            <CheckCircleIcon className='size-5 text-green-400'/>
                            <p className='text-sm font-medium text-green-800'>Successfully uploaded</p>
                        </div>
                        <button className='rounded p-2 hover:bg-green-100 focus:border-2 focus:border-green-500'>
                            <XMarkIcon className='size-5 text-green-400'/>
                        </button>
                    </div>
                </div>
            )}
        </BasicStructure>
    );
}