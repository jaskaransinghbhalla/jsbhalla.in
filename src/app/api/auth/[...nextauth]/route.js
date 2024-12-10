// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  debug: true,
  // session: {
  //   strategy: "jwt",
  // },
  // jwt: {
  //   secret: "secret",
  // },

  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("clal");
        // Your custom authentication logic
        //   const { username, password } = credentials;

        //   // Example: Verify against a mock database
        //   const user = { id: 1, name: "John Doe", email: "johndoe@example.com" };

        //   if (username === "testuser" && password === "password123") {
        //     // Return user object if authentication is successful
        //     return user;
        //   } else {
        //     // Return null if authentication fails
        //     return null;
        //   }
        return null;
      },
      // async authorize(credentials, req) {
      //   const response = await sql`
      //     SELECT * FROM users WHERE email=${credentials?.email}
      //   `;
      //   const user = response.rows[0];

      //   console.log("Hello Zindabad.");

      //   const passwordCorrect = await compare(
      //     credentials?.password || "",
      //     user.password
      //   );

      //   if (passwordCorrect) {
      //     return {
      //       id: user.id,
      //       email: user.email,
      //     };
      //   }

      //   console.log("credentials", credentials);
      //   return null;
      // },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
  },
});

export { handler as GET, handler as POSt };
