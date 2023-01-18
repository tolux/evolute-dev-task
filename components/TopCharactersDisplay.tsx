import { Data } from "@/@types";
import { FC } from "react";

export const TopCharactersDisplay: FC<{ getTopCharcter: Data[] }> = ({
  getTopCharcter,
}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Top 3 characters</h5>
            <div className="">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>No episode</th>
                  </tr>
                </thead>
                <tbody>
                  {getTopCharcter.map((charc) => (
                    <tr key={charc.id}>
                      <td>{charc.name}</td>
                      <td>{charc.episode.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
