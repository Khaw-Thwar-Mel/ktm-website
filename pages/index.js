import { Box } from "@mui/material";
import OurSocialCommitment from "../components/Home/OurSocialCommitment";
// import OurMission from "../components/Home/OurMission";
// import OurVision from "../components/Home/OurVision";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import OurValues from "../components/Home/OurValues";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestoreDatabase } from "../utils/firebase";
import Missionvision from "../components/Home/Missionvision";

export default function HomePage() {
  const logData = async () => {
    // const querySnapshot = await getDocs(
    //   collection(firestoreDatabase, "subscribers")
    // );
    // console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    // console.log(doc);
    // console.log(doc.data());
    // });
    const citiesRef = collection(firestoreDatabase, "cities");

    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "MYANMAR",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
  };
  logData();

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Hero />
      <AboutUs />
      {/* <OurStory /> */}
      <Missionvision />
      {/* <OurVision />
      <OurMission /> */}
      <OurValues />
      <OurSocialCommitment />
    </Box>
  );
}
