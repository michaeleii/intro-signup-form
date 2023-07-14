import Intro from "./components/Intro";
import Promo from "./components/Promo";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="min-h-screen w-full bg-[hsl(0_100%_74%)] px-5 py-10 xl:flex xl:items-center xl:justify-around xl:gap-10">
      <picture>
        <source srcSet="/bg-intro-desktop.png" media="(min-width: 1280px)" />
        <img
          src="/bg-intro-mobile.png"
          alt=""
          className="absolute left-0 top-0 max-h-screen w-full object-cover"
        />
      </picture>
      <div className="z-10 xl:max-w-lg">
        <Intro />
      </div>
      <div className="xl:mr-10">
        <Promo />
        <SignupForm />
      </div>
    </div>
  );
}
export default App;
