import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="/about">{siteMetadata.author}</Link>
          </div>
          <div>{` • `}</div>
          <div>{`© 2025`}</div>
        </div>
      </div>
    </footer>
  )
}
