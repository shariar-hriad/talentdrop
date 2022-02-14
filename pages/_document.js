/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel="icon"
            href="/assets/images/brand/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/assets/images/brand/favicon.ico"
          /> */}
          {/* ==================== google font ================  */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* font-awesome cdn */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
          {/* ==================== css link part =============== */}
          {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/all.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/dashboard.css" /> */}
          {/* <link rel="stylesheet" href="/dashboard-responsive.css"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
