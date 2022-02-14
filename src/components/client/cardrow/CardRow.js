import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './CardRow.module.css';
import defaultLogo from '/public/images/default-logo.png';

export default function CardRow({ job }) {
  const { job_title, job_bounty, job_slug, company } = job
  const { company_logo, company_name, company_slug } = company



  const router = useRouter()
  return (
    <div className={styles.card__row_wrapper}>
      <div className={styles.card__img}>
        <Image src={defaultLogo} alt="" />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>
          <Link href={`c/${company_slug}`}>
            <a >
              {company_name}
            </a>
          </Link>
        </h3>
        <div className={styles.card__details}>
          <h4 className={styles.card__subtitle}>
            <Link href={`c/${company_slug}/${job_slug}`}>
              <a >
                {job_title}
              </a>
            </Link>
          </h4>
          <div className="d-flex gap-3">
            {job.tags.map((tag, i) => (

              <p className={styles.card__tag} key={i}>
                <Link href={tag.tag_slug}>
                  <a>{tag.tag_name}</a>
                </Link>
              </p>

            ))}



            <p className={styles.card__location}>📍CA, USA</p>
          </div>
          <p className={styles.card__condition}>New</p>
          <p className={styles.card__price}>{`$${job_bounty}`}</p>
          <button onClick={() => router.push(`r/${company.company_slug}/${job_slug}/refer`)} type="submit">refer now</button>
        </div>
        <p className={styles.card__schedule}>Remote/Fulltime</p>
      </div>
    </div >
  );
}
