import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'Admin', role: 'admin' }; // Replace with actual validation logic
        return user;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role; // Pass role to the session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Save role in the JWT
      }
      return token;
    }
  }
});
