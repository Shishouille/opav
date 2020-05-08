
export default function Footer() {
  return (
    <div className="bg-accent-1 border-t border-accent-2">
      <footer className="footer-d">
        <div className="p-2 md:w-1/2">
          <h3 className="footer-title">
            Palais Garnier
          </h3>
          <div>
            <p>Place de l'Opéra</p>
            <p>75009 Paris</p>
          </div>
        </div>
        <div className="p-2 md:w-1/2 md:text-right md: border-l-2 border-black">
          <h3 className="footer-title">
            Opéra Bastille
          </h3>
          <div>
            <p>Place de la Bastille</p>
            <p>75012 Paris</p>
          </div>
        </div>
      </footer>
      {/* <div>
          <div className="">
            <a
              className="mx-3 font-bold hover:underline"
            >
              Nous suivre : FB TWITTER INTA SOUNDCLOUD YOUTUBE
            </a>
            <a
              className="mx-3 font-bold hover:underline"
            >
              S'inscire à la newsletter
              Applications mobiles
            </a>
          </div>
        </div> */}
    </div>
  );
}
