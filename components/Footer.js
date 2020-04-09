import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="">
          <h3 className="">
            Palais Garnier
          </h3>
          <div>
            <p>Place de l'Opéra</p>
            <p>75009 Paris</p>
          </div>
          <h3 className="">
            Opéra Bastille
          </h3>
          <div>
            <p>Place de la Bastille</p>
            <p>75012 Paris</p>
          </div>
          <div>
            <p>3è Scène</p>
            <a href="">Jetez un coup d'oeil</a>
          </div>
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
        </div>
      </Container>
    </footer>
  );
}
