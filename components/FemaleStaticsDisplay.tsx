import { FC } from "react";

export const FemaleStaticsDisplay: FC<{ femaleStatistics: any[] }> = ({
  femaleStatistics,
}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Status assign most</h5>
            <p>
              {" "}
              the highest species with the female characters is :{" "}
              <strong>{femaleStatistics[0][0]}</strong> species, with the below
              statistics
            </p>
            <div className="">
              <table className="table">
                <thead>
                  <tr>
                    <th>Species Name</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  {femaleStatistics.map((charc) => (
                    <tr key={charc}>
                      <td>{charc[0]}</td>
                      <td>{charc[1]}</td>
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
