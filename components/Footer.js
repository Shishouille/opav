import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            Palais Garnier
          </h3>
          <div>
            <p>Place de l'Opéra</p>
            <p>75009 Paris</p>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-5 lg:mb-0 lg:pr-4 lg:w-1/2">
            Opéra Bastille
          </h3>
          <div>
            <p>Place de la Bastille</p>
            <p>75012 Paris</p>
          </div>
          <div>
            <p>3è Scène</p>
            <a href="https://www.operadeparis.fr/3e-scene">Jetez un coup d'oeil</a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              Nous suivre : FB TWITTER INTA SOUNDCLOUD YOUTUBE
            </a>
            <a
              href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
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
