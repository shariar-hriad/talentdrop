

import Layout from '../layout';
import styles from './JobDesc.module.css';
import JobDescription from './JobDescription';
import JobInformation from './JobInformation';

export default function JobDesc({ jobDetail }) {
  // console.log(jobDetail)

  return (
    <Layout>
      <section className={styles.job__description}>
        <div className="container">
          <div className="row justify-content-center px-3">
            <div className="col-md-12 col-lg-6">
              <JobDescription jobDetail={jobDetail} />
            </div>

            <div className='col-md-12 col-lg-6'>
              <JobInformation jobDetail={jobDetail} />

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
