import logo from "../assets/logo.png";

/*****************************/
/******** COMPONENT **********/
/*****************************/
export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="w-44 h-44 mb-8 object-contain" />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}