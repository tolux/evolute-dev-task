import { Data } from "@/@types";
import { useRouter } from "next/router";

export default function Details({
  personalDetails,
}: {
  personalDetails: Data;
}) {
  const router = useRouter();
  return (
    <>
      <div className="container mt-4 text-center">
        <p
          style={{
            borderBottom: "1px solid black",
            cursor: "pointer",
          }}
          className="d-inline-block"
          onClick={() => router.back()}
        >
          {" "}
          go back
        </p>
        <hr />
        <div className="d-inline-block">
          {personalDetails && (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={personalDetails.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{personalDetails.name} details</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  species: {personalDetails.species}
                </li>
                <li className="list-group-item">
                  created: {personalDetails.created}
                </li>
                <li className="list-group-item">
                  status: {personalDetails.status}{" "}
                </li>
                <li className="list-group-item">
                  gender: {personalDetails.gender}{" "}
                </li>
                <li className="list-group-item">
                  location: {personalDetails.location.name}
                </li>
                <li className="list-group-item">
                  episode: {personalDetails.episode.length}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  const detailsId = "1";
  return {
    paths: [
      {
        params: { detailsId },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { detailsId } = params;
  const res = await fetch(`http://localhost:3000/api/${detailsId}`);
  const data = await res.json();

  return {
    props: {
      personalDetails: data,
    },
  };
}
