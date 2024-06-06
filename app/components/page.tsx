import Header from "../assets/Header";

export default function ComponentsPage() {

    return (
        <>
            <Header />
            <div className="grid cols-4 justify-start w-full mx-auto max-w-[1296px]">
                <h2
                    className="mt-3 mb-10 text-3xl font-extrabold text-slate-900"
                    id="#application-ui"
                >Application UI</h2>
                <div className="pl-8">
                    <h3 className="text-xl font-semibold text-slate-700 mb-4">Feedback</h3>
                    <ul className="pl-8 flex flex-col gap-4">
                        <li><a href="/components/application-ui/feedback/alerts">Alert</a></li>
                        <li><a href="/components/application-ui/feedback/empty-states">Empty States</a></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}