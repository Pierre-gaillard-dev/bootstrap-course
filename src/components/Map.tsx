import { FC } from "react";
import { MapPin, PhoneIcon } from "./Icons";

const Map: FC = () => {
  return (
    <section className="map container my-5">
      <h2 className="text-center">Où nous trouver ?</h2>
      <div className="map-container mt-4 position-relative rounded overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.294481315674998!3d48.85837007928795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66efc8b8b8b8%3A0x123456789abcdef0!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="map-overlay position-absolute top-0 start-0 w-33 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center p-3 bg-primary text-white">
          <h3 className="mb-0">Vannes</h3>
          <a className="mb-0 text-white" href="/#">
            <span>
              <MapPin size={16} />
            </span>
            12 rue du MC, Vannes
          </a>
          <a className="mb-0 text-white" href="tel:+1234567890">
            <span>
              <PhoneIcon size={16} />
            </span>
            +33 1 23 45 67 89
          </a>
          <hr className="w-100" />
          <h3 className="mb-0">Auray</h3>
          <a className="mb-0 text-white" href="/#">
            <span>
              <MapPin size={16} />
            </span>
            34 avenue du MC, Auray
          </a>
          <a className="mb-0 text-white" href="tel:+1234567890">
            <span>
              <PhoneIcon size={16} />
            </span>
            +33 1 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
};

export default Map;
