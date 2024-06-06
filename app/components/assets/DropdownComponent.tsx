"use client"

import { useState } from 'react';

type ChangeLanguageHandler = (language: string) => void;

interface DropdownProps {
    onChangeLanguage: ChangeLanguageHandler;
}

const DropdownComponent: React.FC<DropdownProps> = ({ onChangeLanguage }) => {
    const [selectedLanguage, setCodeLanguage] = useState('html');

    const handleLanguageChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const language = evt.target.value;
        setCodeLanguage(language);
        onChangeLanguage(language);
    };

    return (
        <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value='html'>HTML</option>
            <option value='react'>React</option>
        </select>
    );
};

export default DropdownComponent;