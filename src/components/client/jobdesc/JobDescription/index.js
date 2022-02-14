import React from 'react';
import styles from '../JobDesc.module.css';
import RelatedJob from './RelatedJob';
const JobDescription = ({ jobDetail }) => {
    const { job_title, job_bounty, job_description, } = jobDetail
    console.log()
    return (
        <>
            <div className="job__info">
                <div className={styles.job__title}>
                    <h2 className={styles.title}>{job_title}</h2>
                    <div className={styles.details}>
                        <p>
                            <span className={styles.schedule}>full time</span>
                            <span className={styles.rate}>{`$${job_bounty}`}</span>
                            <span className={styles.location}>
                                <i className="fas fa-map-marker-alt"></i>
                                San Fransisco, CA,USA
                            </span>
                        </p>
                    </div>
                </div>
                <div className={styles.job__descriptions}>
                    <h3 className={styles.description__title}>Job Description</h3>
                    <p>
                        {job_description}
                    </p>
                </div>
                <div className={styles.key__responsibilites}>
                    <h3 className={styles.key__title}>Key Responsibilites</h3>
                    <ul>
                        <li>
                            e involved in every step of the product design cycle from
                            discovery to developer handoff and user acceptance
                        </li>
                        <li>
                            Work with BAs, product managers and tech teams to lead the
                            Product Design
                        </li>
                        <li>
                            Maintain quality of the design process and ensure that when
                            designs are translated into code they accurately refl the
                            design specifications.
                        </li>
                        <li>
                            Accurately estimate design tickets during planning sessions.
                        </li>
                        <li>
                            e involved in every step of the product design cycle from
                            discovery to developer handoff and user acceptance.
                        </li>
                    </ul>
                </div>
                <div className={styles.skill__experience}>
                    <h3 className={styles.skill__title}>Skill & Experience</h3>
                    <ul>
                        <li>
                            e involved in every step of the product design cycle from
                            discovery to developer handoff and user acceptance
                        </li>
                        <li>
                            Work with BAs, product managers and tech teams to lead the
                            Product Design
                        </li>
                        <li>
                            Maintain quality of the design process and ensure that when
                            designs are translated into code they accurately refl the
                            design specifications.
                        </li>
                        <li>
                            Accurately estimate design tickets during planning sessions.
                        </li>
                        <li>
                            e involved in every step of the product design cycle from
                            discovery to developer handoff and user acceptance.
                        </li>
                    </ul>
                </div>
                <RelatedJob />
            </div>
        </>
    );
};

export default JobDescription;