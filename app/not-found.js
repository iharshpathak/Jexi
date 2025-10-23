import ErrorPage from "./components/ErrorPage";

export const metadata = {
  title: "Hmm... Looks Like U Are Lost..!!",
  description: "Error - 404: This page does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};


export default function NotFound() {
 
  return (
     <ErrorPage/>
  );
}
