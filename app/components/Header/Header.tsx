import logo from '../../images/roman-bytes.png';

export default function Header() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img className="mx-auto h-12 w-auto" src={logo} alt="Bytes Logo" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-romanYellow">
        Bytes URL Shortener
      </h2>
    </div>
  );
}
