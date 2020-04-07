import Alert from './alert';
import Header from './Header';
import Footer from './Footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
