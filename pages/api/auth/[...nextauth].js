import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "abc@xyz.com"},
                password: {label: "Password", type: "password"}
            },
            authorize: (credentials) => {
                // Check up entered credentials with the database
                if(credentials.email === "pranavsoni1101@gmail.com" && credentials.password === "1234"){
                    return {
                        id: 1,
                        name: "Pranav Soni",
                        email: "pranavsoni1101@gmail.com"
                    }
                }

                // Login failed
                return null;
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            // A user object is available, when first time jwt callback is run
            if(user) {
                token.id = user.id
            }

            return token;
        },
        session: ({ session, token }) => {
            if(token){
                session.id = token.id;
            }

            return session;
        }
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true
    },
    pages: {
        signIn: "/auth/signin"
    }
});