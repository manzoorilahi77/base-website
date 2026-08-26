import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { SkipLink } from '@/components/layout/skip-link'

/** Standard site chrome. Everything a visitor sees lives inside this group. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
