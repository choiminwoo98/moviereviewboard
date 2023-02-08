interface ModalProps {}
export default function Imagemodal({}: ModalProps) {
    return (
        <>
            <div className="absolute right-0 top-full z-[99]">
                <div className="w-40 py-2 flex flex-col bg-white shadow-md rounded-md">
                    <div className="h-12 flex items-center pl-2 hover:bg-gray-100 cursor-pointer">
                        마이페이지
                    </div>
                    <div className="h-12 flex items-center pl-2 hover:bg-gray-100 cursor-pointer">
                        로그아웃
                    </div>
                </div>
            </div>
        </>
    );
}
