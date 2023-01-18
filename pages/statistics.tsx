import { Data } from "@/@types";
import { FemaleStaticsDisplay } from "@/components/FemaleStaticsDisplay";
import { MostStatusDisplay } from "@/components/MostStatusDisplay";
import { TopCharactersDisplay } from "@/components/TopCharactersDisplay";
import { getSingleData } from "@/util/getData";
import { useRouter } from "next/router";

export default function Statistics({
  getTopCharcter,
  statusStatistics,
  femaleStatistics,
}: {
  getTopCharcter: Data[];
  statusStatistics: any[];
  femaleStatistics: any[];
}) {
  const router = useRouter();
  return (
    <>
      <div className="container py-3">
        <p className="fw-bold"> Statistics Info</p>
        <p
          style={{
            borderBottom: "1px solid black",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
          className="d-inline-block"
        >
          {" "}
          go back
        </p>
        <div className="row">
          <TopCharactersDisplay getTopCharcter={getTopCharcter} />

          <MostStatusDisplay statusStatistics={statusStatistics} />

          <FemaleStaticsDisplay femaleStatistics={femaleStatistics} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res: Data[] = await getSingleData("http://localhost:3000/api/data");

  const sortTopCharcter = res.sort(
    (a, b) => b.episode.length - a.episode.length
  );
  const getTopCharcter = sortTopCharcter.splice(0, 3);

  let charobjforStatus = {
    Alive: 0,
    Dead: 0,
    unknown: 0,
  };
  let charobjforFemaleSpecies = {
    Human: 0,
    Alien: 0,
    Humanoid: 0,
    Poopybutthole: 0,
    "Mythological Creature": 0,
    Animal: 0,
  };

  res.forEach((data) => {
    charobjforStatus[data.status] += 1;
    if (data.gender.toLowerCase() === "female") {
      charobjforFemaleSpecies[data.species] += 1;
    }
  });

  let statusStatistics = Object.entries(charobjforStatus);
  statusStatistics = statusStatistics.sort((a: any[], b: any[]) => a[0] - b[0]);

  let femaleStatistics = Object.entries(charobjforFemaleSpecies);
  femaleStatistics = femaleStatistics.sort((a: any[], b: any[]) => a[0] - b[0]);

  return {
    props: {
      getTopCharcter,
      statusStatistics,
      femaleStatistics,
    },
  };
}
