import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const options = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "insert email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "insert paassword"
                }
            },
            async authorize(credentials) {
                // EXAMPLEE BOSSS
                // const user = { id: "42", name: "Dave", password: "nextauth" }
    
                // if (credentials?.username === user.name && credentials?.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }

                console.log("Credentials: ", credentials?.username)
                const user = await prisma.users.findFirst({
                    where: { username: credentials?.username }
                });
            
                console.log("user", user)
                // Jika user ditemukan dan password cocok
                if (user && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
};

export default NextAuth(options);