import Link from 'next/link'

const links = [
    {
      href: "https://facebook.com/hackrice",
      label: "Facebook",
      icon: "https://icon.now.sh/facebook/ffffff/24"
    },
    {
      href: "https://medium.com/@hackrice",
      label: "Medium",
      icon: "https://icon.now.sh/medium/ffffff/24"
    },
    {
      href: "https://twitter.com/hackingrice",
      label: "Twitter",
      icon: "https://icon.now.sh/twitter/ffffff/24"
    },
    {
      href: "mailto:officialhackrice@gmail.com",
      label: `Email`,
      icon: "https://icon.now.sh/email/ffffff/24"
    },
    {
      href: "https://hackrice8.devpost.com/",
      label: "Devpost",
      icon: "https://icon.now.sh/build/ffffff/24"
    }
  ].map(link => {
    link.key = `link-${link.label}`;
    return link;
});

  const socialLinks = () => (
      <div>
          {
              links.map(({ href, icon, key}) => (
                  <Link href={ href } key={key}>
                    <a><img src={ icon } className="icon"/></a>
                  </Link>
              )
              )
          }
        <style jsx>{`
            .icon {
                padding: 10px;
            }
        `}</style>
      </div>
  )

  export default socialLinks;