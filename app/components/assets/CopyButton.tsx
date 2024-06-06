import { ClipboardDocumentCheckIcon, ClipboardIcon, EyeIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type CopyButtonProps = {
    text: string
}

const CopyButton: React.FC<CopyButtonProps> = ({
    text,
}) => {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="flex p-1 bg-slate-100 rounded-md text-sm">
                <button onClick={copyToClipboard} className="">
            {copied ?
                (
                    <button className='flex items-center justify-center gap-1.5 rounded-md px-2 py-2 font-medium bg-white text-sky-500'>
                        Copied
                        <div className="max-h-[20px] min-w-[20px]">
                            <ClipboardDocumentCheckIcon />
                        </div>
                    </button>
                ) : (
                    <button className='flex items-center justify-center gap-1.5 rounded-md px-2 py-2 font-medium text-gray-500'>
                        Copy
                        <div className="max-h-[20px] min-w-[20px]">
                            <ClipboardIcon />
                        </div>
                    </button>
                )}
        </button>
            </div>
        </>
    )
}

export default CopyButton;