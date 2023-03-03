import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Avatarmodal from "./modal/imagemodal";
import Imagemodal from "./modal/imagemodal";
import { useRouter } from "next/router";
export default function Header() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [modal, setModal] = useState(false);
    const convertModal = () => {
        setModal((prev) => !prev);
    };
    const onSignOut = () => {
        signOut({ redirect: false });
    };
    return (
        <div className="border-b-[2px] shadow-sm fixed w-full h-14 flex justify-center bg-white z-[99] items-center">
            <div className="w-full max-w-6xl px-5 md:px-8 flex justify-between  items-center">
                <div
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    logo
                </div>
                <div className="flex items-center space-x-2">
                    {session ? (
                        <>
                            <div>{session.user.name}</div>
                            <div className="relative">
                                <div className="relative cursor-pointer  w-10 aspect-square rounded-full overflow-hidden shadow-md">
                                    <Image
                                        src={session.user.image}
                                        alt={"avatar"}
                                        fill
                                        onClick={convertModal}
                                    />
                                </div>
                                {modal && <Imagemodal logout={onSignOut} />}
                            </div>
                        </>
                    ) : (
                        <>
                            <button onClick={() => router.push("/auth/login")}>
                                로그인
                            </button>
                            <button
                                onClick={() => router.push("/auth/register")}
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
