// import Alert from './alert';
import Header from './Header';
import Footer from './Footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="layout" id="main-bg">
        {/* <Alert preview={preview} /> */}
        <Header />
        <main className="layout-bg">{children}</main>
      </div>
      <Footer />
    </>
  );
}