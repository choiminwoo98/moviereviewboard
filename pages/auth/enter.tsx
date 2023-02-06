import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Enter: NextPage = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user.id} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }

    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};
export default Enter;
