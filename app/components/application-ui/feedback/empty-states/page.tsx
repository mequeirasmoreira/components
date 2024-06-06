import Header from "@/app/assets/Header";

import Simple from "./components/Simple";

export default function Alerts() {
    return (
        <div>
            <Header />
            <div className="flex w-full mx-auto max-w-[1296px]">
                <div className="">
                    <div className="gap-2 font-semibold text-slate-500 text-sm">
                        <a href="/components#application-ui">Application UI</a>
                        <span className="pl-2">/</span>
                        <a href="/components#application-ui" className="pl-2">Feedback</a>
                    </div>
                    <h2 className="mt-3 mb-10 text-3xl font-extrabold text-slate-900">
                        Empty States
                    </h2>    
                </div>
            </div>
            <div>
                {/* Importação Componentes */}
                <Simple />
            </div>
        </div>
    )
}