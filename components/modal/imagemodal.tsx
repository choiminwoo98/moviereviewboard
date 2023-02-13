import { useRouter } from "next/router";

interface ModalProps {
    logout: () => void;
}
export default function Imagemodal({ logout }: ModalProps) {
    const router = useRouter();
    return (
        <>
            <div className="absolute right-0 top-full z-[99]">
                <div className="w-40 py-2 flex flex-col bg-white shadow-md rounded-md">
                    <div
                        className="h-12 flex items-center pl-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        마이페이지
                    </div>
                    <div
                        className="h-12 flex items-center pl-2 hover:bg-gray-100 cursor-pointer"
                        onClick={logout}
                    >
                        로그아웃
                    </div>
                </div>
            </div>
        </>
    );
}
