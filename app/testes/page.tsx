"use client"

import { useEffect, useState } from 'react'

export default function TesteSelect() {
    const [codeString, setCodeString] = useState<string | undefined>(undefined);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        
        if (selectedLanguage === 'html') {
            setCodeString('HTML');
        } else if (selectedLanguage === 'react') {
            setCodeString('React');
        } else {
            setCodeString(undefined);
        }
    };

    return (
        <div>
            <select name="language" id="language" onChange={handleSelectChange}>
                <option value="html">HTML</option>
                <option value="react">React</option>
            </select>

            {codeString && <p>Selected language: {codeString}</p>}
        </div>
    );
}

