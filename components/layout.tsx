import Head from "next/head";
import Header from "./header";

interface LayoutProps {
    title: string;
    seoTitle: string;
    children: React.ReactNode;
}
export default function Layout({ title, seoTitle, children }: LayoutProps) {
    return (
        <div className="w-screen min-h-screen grid grid-cols-1 bg-gray-50">
            <Head>
                <title>{`hello | ${seoTitle}`}</title>
            </Head>
            <>
                <Header />

                <div className="w-full min-w-sm flex flex-col items-center pt-14">
                    <div className="w-full flex flex-col px-5 max-w-6xl flex-grow">
                        {children}
                    </div>
                </div>
            </>
        </div>
    );
}
