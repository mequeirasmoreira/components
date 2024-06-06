"use client"

import { useState } from "react";

import Header from "./Header";
import ButtonToggle from "../components/assets/ButtonToggle";
import DropdownComponent from "../components/assets/DropdownComponent";
import CopyButton from "../components/assets/CopyButton";


type PageProps = {
    onPreviewClick: () => void,
    onCodeClick: () => void,
    previewActive: boolean,
    onChangeLanguage: (language: string) => void,
}

const Page: React.FC<PageProps> = ({
    onPreviewClick,
    onCodeClick,
    previewActive,
    onChangeLanguage,

}) => {

    return (
            <>
                <Header />
                <div className="flex flex-col mx-auto max-w-[1296px]">
                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Titulo Componentes</h1>
                    <nav className="order-first flex space-x-2 text-sm font-semibold">
                        <a href="/components#application-ui" className="text-slate-500 hover:text-slate-600">Application UI</a>
                        <div className="select-none text-slate-400">/</div>
                        <a href="components#feedback" className="text-slate-500 hover:text-slate-600">Feedback</a>
                    </nav>
                </div>
                <section className="flex flex-col mx-auto max-w-[1296px] w-full py-8">
                    <div className="flex w-full justify-between">
                        <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                            <a href="#">Nome Componente</a>
                        </h2>
                        <div className="flex gap-4">
                            <ButtonToggle onPreviewClick={onPreviewClick} onCodeClick={onCodeClick} previewActive={previewActive}/>
                            <DropdownComponent onChangeLanguage={onChangeLanguage}/>
                            <CopyButton text={""} />
                        </div>
                    </div>
                    <main className="relative">
                        <div className="resize-x max-w-[1296px]">
                            <div className="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10">
                                <div className="my-10 flex h-full w-full items-center justify-center px-3">
                                    <div className="flex w-full min-w-[296px] max-w-[864px] items-start rounded-md bg-green-50 p-4 relative">
                                        <div className="mr-3 max-h-[16x] min-w-[16px] text-green-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" className="h-6 w-6">
                                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="max-h-[108] min-h-[68px] w-[1269] text-sm">
                                            <h3 className="mb-2 font-medium text-green-800">Order completed</h3>
                                            <p className="text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                                            <div className="ml-[-10px] mt-[10px] flex gap-3">
                                                <button className="rounded-xl border-2 border-green-50 px-2 py-[6px] font-medium text-green-800 hover:bg-green-100 focus:border-2 focus:border-green-700">View status</button>
                                                <button className="rounded-xl border-2 border-green-50 px-2 py-[6px] font-medium text-green-800 hover:bg-green-100 focus:border-2 focus:border-green-700">Dismiss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex">
                                <div className="h-8 w-1.5 rounded-full bg-slate-400"></div>
                            </div>
                    </main>
                </section>
            </>
    )
}

export default Page;