import Logo from '~/components/Logo';

export default function Header() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-romanYellow">
        Bytes URL Shortener
      </h2>
    </div>
  );
}
