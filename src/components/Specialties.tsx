import { FC } from "react";

const Specialties: FC = () => {
  return (
    <section className="specialties container mt-5">
      <h2 className="text-center">Nos spécialités</h2>
      <div className="row mt-4">
        <div className="card col-md-4 bg-light" style={{ scale: 0.9 }}>
          <img src="/cocktail.png" className="card-img-top" alt="Cocktail" />
          <div className="card-body">
            <h3 className="card-title text-center">Bar</h3>
            <p className="card-text text-center">
              Découvrez notre sélection de cocktails, bières artisanales et vins
              locaux pour accompagner votre soirée.
            </p>
            <button className="btn btn-primary d-block mx-auto">
              Réserver
            </button>
          </div>
        </div>
        <div className="card col-md-4 bg-light">
          <img src="/meal.png" className="card-img-top" alt="Food" />
          <div className="card-body">
            <h3 className="card-title text-center">Restaurant</h3>
            <p className="card-text text-center">
              Découvrez notre carte de plats traditionnels et modernes, préparés
              avec des ingrédients locaux et de qualité.
            </p>
            <button className="btn btn-primary d-block mx-auto">
              Réserver
            </button>
          </div>
        </div>
        <div className="card col-md-4 bg-light" style={{ scale: 0.9 }}>
          <img src="/wine.png" className="card-img-top" alt="Event" />
          <div className="card-body">
            <h3 className="card-title text-center">Vins</h3>
            <p className="card-text text-center">
              Découvrez notre sélection de vins locaux et internationaux pour
              accompagner votre repas ou pour une dégustation.
            </p>
            <button className="btn btn-primary d-block mx-auto">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
