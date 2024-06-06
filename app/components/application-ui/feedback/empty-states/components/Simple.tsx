"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { FolderPlusIcon  } from '@heroicons/react/24/outline';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function NomeDoComponente() {
    const name = "Simples";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const codeReactString = ``

    const codeHTMLString = ``

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
                    <div className="flex flex-col w-full min-w-[296px] max-w-[864px] items-center justify-between rounded px-4 py-2 text-[14px]">
                        <FolderPlusIcon className='size-10'/>
                        <span className='font-semibold mt-2 text-gray-900'>Nenhum projeto selecionado</span>
                        <span className='text-gray-500 mt-1'>Comece a criar um novo projeto.</span>
                    </div>
                </div>
            )}
        </BasicStructure>
    );
}