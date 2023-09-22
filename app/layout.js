import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "Find best prompts for your ChatGPT",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
