import { FC } from "react";

const commentsData = [
  {
    name: "Robertoto",
    comment:
      "Je recommande fortement, le petit MC accompagné d’un verre de rouge fut fort agréable. dommage que la connexion internet n’était pas au rendez-vous.",
    rating: 4,
  },
  {
    name: "Baptiste D.",
    comment:
      "Très bon restaurant, je recommande fortement. La cuisine est très bonne, les collègues un peu moins.",
    rating: 5,
  },
  {
    name: "Ranga",
    comment:
      "Ambiance très agréable ! je me suis installé sur une petite table avant de commencer à coloniser les autres. le repas s’est fini avec un assaut sur mon collègue sans utilisation de MIRV.",
    rating: 5,
  },
];

const Comments: FC = () => {
  return (
    <section className="comments container my-5">
      <h2 className="text-center">Ils témoignent</h2>
      <div className="row">
        {commentsData.map((comment, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                  <h5 className="card-title">{comment.name}</h5>

                  <div className="d-flex justify-content-between align-items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < comment.rating ? "text-warning" : "text-muted"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="card-text">{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
