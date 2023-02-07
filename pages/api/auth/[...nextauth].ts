import client from "@/libs/server/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
interface TokenType extends JWT {
    user?: User;
}

interface SessionType {
    session: Session;
    token: TokenType;
    user?: User;
}
export default NextAuth({
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.user = { id: user.id };
            }
            return token;
        },
        async session({ session, token, user }: SessionType) {
            if (token.user) {
                session.user = token.user;
            }
            return session;
        },
    },
    adapter: PrismaAdapter(client),
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID!,
        //     clientSecret: process.env.GITHUB_SECRET!,
        // }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // }),
        // NaverProvider({
        //     clientId: process.env.NAVER_CLIENT_ID!,
        //     clientSecret: process.env.NAVER_CLIENT_SECRET!,
        // }),
        // ...add more providers here
    ],
    secret: process.env.AUTH_SECRET,
});
