import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
    const { data: session, status } = useSession();
    console.log(session, status);
    const onClick = () => {
        signOut({ redirect: false }).then(() => {
            signIn("kakao", {
                redirect: false,
                callbackUrl: `${window.location.origin}/`,
            });
        });
    };
    if (session) {
        return (
            <>
                Signed in as {session.user?.id} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    } else
        return (
            <>
                Not signed in <br />
                <button onClick={onClick}>Sign in</button>
            </>
        );
}
