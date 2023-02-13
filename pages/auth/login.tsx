import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import router from "next/router";
import { useEffect } from "react";

const Login: NextPage = () => {
    const { data: session, status } = useSession();
    const onClick = () => {
        signOut({ redirect: false }).then(() => {
            signIn("kakao", {
                redirect: false,
            });
        });
    };
    useEffect(() => {
        if (session) {
            if (status === "authenticated") router.replace("/");
        }
    }, [session, status]);

    return (
        <>
            <div className="bg-yellow-300" onClick={onClick}>
                kakao
            </div>
        </>
    );
};
export default Login;
