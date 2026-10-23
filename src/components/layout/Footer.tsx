import { profile } from '../../data/profile'
import { Icon } from '../ui/Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built by me with React, TypeScript and Vite.
        </p>
        <a className="footer-top" href="#top">
          Back to top <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  )
}
