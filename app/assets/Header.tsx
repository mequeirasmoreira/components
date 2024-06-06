export default function Header() {
    return (
        <div
            className="flex w-full mx-auto max-w-[1296px] py-9 border-b-[1px] border-gray-200 mb-20"
        >
            <nav>
                <ul
                    className="flex gap-8 text-slate-900 font-semibold"
                >
                    <li><a href="/components">Components</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/docs">Docs</a></li>
                </ul>
            </nav>
        </div>
    )
}