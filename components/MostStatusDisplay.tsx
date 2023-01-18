import { FC } from "react";

export const MostStatusDisplay: FC<{ statusStatistics: any[] }> = ({
  statusStatistics,
}) => {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Status assign most</h5>
            <p>
              {" "}
              the highest status assign to most characters is :{" "}
              <strong>{statusStatistics[0][0]}</strong> status, with the below
              statistics
            </p>
            <div className="">
              <table className="table">
                <thead>
                  <tr>
                    <th>Status Name</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  {statusStatistics.map((charc) => (
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
