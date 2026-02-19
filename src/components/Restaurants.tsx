import { FC, useState } from "react";

const Restaurants: FC = () => {
  const [hoveredRestaurant, setHoveredRestaurant] = useState<
    "vannes" | "auray"
  >("vannes");

  return (
    <section className="restaurants container my-5">
      <h2 className="text-center">Nos Restaurants</h2>
      <div className="row position-relative rounded overflow-hidden mt-4">
        <div
          className={
            "col-md-6 p-5 d-flex flex-column align-items-center gap-3" +
            (hoveredRestaurant === "vannes" ? " text-white" : "")
          }
          onMouseEnter={() => setHoveredRestaurant("vannes")}
          style={{ transition: "all 0.3s ease" }}
        >
          <h3>Vannes</h3>
          <p>
            Notre restaurant de Vannes vous accueille dans un cadre chaleureux
            et convivial. Nous vous proposons une cuisine traditionnelle
            française, mettant en valeur les produits locaux et de saison. Venez
            déguster nos plats savoureux et notre sélection de vins
            soigneusement choisis.
          </p>
          <p>
            Découvrez notre menu varié, allant des classiques de la cuisine
            française aux spécialités régionales. Notre équipe de chefs
            passionnés s'efforce de créer des plats délicieux et innovants pour
            satisfaire tous les palais.
          </p>
          <button
            className={
              "btn round" +
              (hoveredRestaurant === "vannes" ? " btn-primary" : " btn-white")
            }
            style={{ transition: "all 0.3s ease" }}
          >
            La carte
          </button>
          <button
            className={
              "btn round" +
              (hoveredRestaurant === "vannes" ? " btn-white" : " btn-primary")
            }
            style={{ transition: "all 0.3s ease" }}
          >
            Réserver
          </button>
        </div>
        <div
          className={
            "col-md-6 p-5 d-flex flex-column align-items-center gap-3 rounded" +
            (hoveredRestaurant === "auray" ? " text-white" : "")
          }
          onMouseEnter={() => setHoveredRestaurant("auray")}
          style={{ transition: "all 0.3s ease" }}
        >
          <h3>Auray</h3>
          <p>
            Notre restaurant d'Auray vous invite à découvrir une expérience
            culinaire unique dans un cadre élégant et moderne. Nous vous
            proposons une cuisine inventive et raffinée, mettant en avant les
            saveurs de la région et les produits frais.
          </p>
          <p>
            Notre menu change régulièrement pour vous offrir une variété de
            plats créatifs et délicieux. Que vous soyez amateur de viande, de
            poisson ou végétarien, notre chef saura satisfaire vos envies
            culinaires.
          </p>
          <button
            className={
              "btn round" +
              (hoveredRestaurant === "auray" ? " btn-primary" : " btn-white")
            }
            style={{ transition: "all 0.3s ease" }}
          >
            La carte
          </button>
          <button
            className={
              "btn round" +
              (hoveredRestaurant === "auray" ? " btn-white" : " btn-primary")
            }
            style={{ transition: "all 0.3s ease" }}
          >
            Réserver
          </button>
        </div>
        <div className="col-12 position-absolute top-0 start-0 h-100 w-100 bg-light z-n1 rounded overflow-hidden"></div>
        <div
          className={
            "col-6 position-absolute top-0 h-100 z-n1 rounded overflow-hidden p-0" +
            (hoveredRestaurant === "vannes" ? " start-0" : " start-50")
          }
          style={{ transition: "all 0.3s ease" }}
        >
          <img
            src="https://www.labelleepoque-restaurant.fr/themes/labelleepoque_theme/images/interface/bg-mise-en-avant.jpg"
            alt="Restaurant d'Auray"
            className="img-fluid h-100 w-100 object-fit-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
