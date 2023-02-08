import { NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
export default function Home() {
    return (
        <Layout title={"홈"} seoTitle={"홈"}>
            <div className="h-96 ">index</div>
        </Layout>
    );
}
