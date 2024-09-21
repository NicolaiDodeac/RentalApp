import s from "./Home.module.css";
import CatalogCard from "../CatalogCard/CatalogCard";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = ({ cars }) => {
  return (
    <div>
      <section className={s.hero}>
        <div className={s.heroContent}>
          <h1 className={s.oneTitle}>
            Welcome to <span className={s.subSubtitle}>Your</span> Dream Ride
          </h1>
          <a href="/catalog" className={s.ctaBtn}>
            Browse Our Cars
          </a>
          <p className={s.subtitle}>
            Take your <span className={s.subSubtitle}>Keys</span> and hop on
            your luxury adventure!
          </p>
        </div>
      </section>

      <section className={s.featuredCars}>
        <h2 className={s.sectionTitle}>Top-Featured</h2>
        <div className={s.carGrid}>
          {cars && cars.length > 0 ? (
            cars.map((car) => (
              <div key={car.id} className={s.cardWrapper}>
                <CatalogCard car={car} />
              </div>
            ))
          ) : (
            <p>No featured cars available</p>
          )}
        </div>
      </section>

      {/* Why Choose Us Section
      <section className={s.whyChooseUs}>
        <h2 className={s.sectionTitle}>Why Choose Us</h2>
        <div className={s.reasons}>
          <div className={s.reason}>
            <img src="/images/icon-cars.svg" alt="Wide Range" />
            <h3>Wide Range of Cars</h3>
            <p>From SUVs to sports cars, we have something for every need.</p>
          </div>
          <div className={s.reason}>
            <img src="/images/icon-pricing.svg" alt="Affordable Pricing" />
            <h3>Affordable Pricing</h3>
            <p>Luxury at affordable prices.</p>
          </div>
          <div className={s.reason}>
            <img src="/images/icon-support.svg" alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>Always here to help, whenever you need us.</p>
          </div>
        </div>
      </section> */}

      <footer className={s.footer}>
        <p>
          &copy; 2024 Car Rental App |{" "}
          <a
            href="https://en.wiktionary.org/wiki/terms_and_conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>{" "}
          |{" "}
          <a
            href="/privacyhttps://en.wikipedia.org/wiki/Privacy_policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
        </p>
        <div className={s.socialIcons}>
          <a
            href="https://en-gb.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/?lang=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
