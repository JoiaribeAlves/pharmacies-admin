import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <nav className="flex h-16 w-full items-center justify-between bg-red-600 px-4 lg:px-40">
      <Link href="/">
        <Image
          src="/logo-white.png"
          alt="Logo do site"
          width={40}
          height={40}
        />
      </Link>

      <ul className="flex">
        <li>
          <Link
            href="/"
            className="rounded-full px-3 py-2 text-white transition-colors hover:bg-white hover:text-red-600"
          >
            Início
          </Link>
        </li>

        <li>
          <Link
            href="/farmacias"
            className="rounded-full px-3 py-2 text-white transition-colors hover:bg-white hover:text-red-600"
          >
            Farmácias
          </Link>
        </li>

        <li>
          <Link
            href="/plantoes"
            className="rounded-full px-3 py-2 text-white transition-colors hover:bg-white hover:text-red-600"
          >
            Plantões
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export { Header }
