import Header from "../assets/Header";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `"use client"

import { SetStateAction, useState } from 'react';
import BasicStructure from '@/app/components/assets/BasicStructure';

import { Icon } from '@heroicons/react/16/solid';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function NomeDoComponente() {
    const name = "Nome do Componente";
    const [showCode, setShowCode] = useState(false); 
    const [selectedLanguage, setCodeLanguage] = useState('html');
    const [code, setCode] = useState('Meu Código HTML')

    const codeReactString = 

    const codeHTMLString =

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
        
                <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
                    {code}
                </SyntaxHighlighter>
            ) : (
                Componente (em REACT)
            )}
        </BasicStructure>
    );
}`

export default function DocsPage() {
    return (
        <div>
            <Header />
            <div className="flex justify-center items-center m-auto max-w-5xl mb-10 ">
            <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}