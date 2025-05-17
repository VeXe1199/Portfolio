import styles from '../styles/ContactCode.module.css';

const contactItems = [

  {
    social: 'email',
    link: 'sahil1199.work@gmail.com',
    href: 'mailto:sahil1199.work@gmail.com',
  },
  {
    social: 'github',
    link: 'VeXe1199',
    href: 'https://github.com/VeXe1199',
  },
  {
    social: 'linkedin',
    link: 'Sahil Sonawane',
    href: 'https://www.linkedin.com/in/sahil-sonawane-b0b01a250/'
  },
  {
    social: 'LeetCode',
    link: 'painkiller0',
    href: 'https://leetcode.com/u/painkiller0/',
  },
  {
    social: 'CodeForces',
    link: 'painkiller0',
    href: 'https://codeforces.com/profile/painkiller0',
  },
  {
    social: 'CodeChef',
    link: 'painkiller0',
    href: 'https://www.codechef.com/users/painkiller0',
  },
  {
    social: 'instagram',
    link: 'Sahil',
    href: 'https://www.instagram.com/sa_heeeel',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
