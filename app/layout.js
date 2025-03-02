export default function RootLayout({ children }) {
    return (
      <html lang="fr">
        <head>
          <title>Mon To-Do App</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
  