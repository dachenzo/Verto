import styles from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <section className={styles.landingSection}>
            <div className={styles.landingContent}>
                <div className={styles.logo}>Verto</div>
                <div className={styles.heroContent}>
                    <h1>
                        Organize Your Work,
                        <br />
                        Simplify Your Life
                    </h1>
                    <p>
                        Verto helps teams move work forward. Collaborate, manage
                        projects, and reach new productivity peaks with our
                        intuitive task management platform.
                    </p>
                </div>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>10K+</div>
                        <div className={styles.statLabel}>Active Users</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>98%</div>
                        <div className={styles.statLabel}>Satisfaction</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>50+</div>
                        <div className={styles.statLabel}>Integrations</div>
                    </div>
                </div>

                <ul className={styles.featureList}>
                    <li className={styles.featureItem}>
                        <span className={styles.featureIcon}>🎯</span>
                        <span className={styles.featureText}>
                            Smart task organization
                        </span>
                    </li>
                    <li className={styles.featureItem}>
                        <span className={styles.featureIcon}>👥</span>
                        <span className={styles.featureText}>
                            Real-time collaboration
                        </span>
                    </li>
                    <li className={styles.featureItem}>
                        <span className={styles.featureIcon}>⚡</span>
                        <span className={styles.featureText}>
                            Workflow automation
                        </span>
                    </li>
                    <li className={styles.featureItem}>
                        <span className={styles.featureIcon}>📊</span>
                        <span className={styles.featureText}>
                            Progress tracking
                        </span>
                    </li>
                </ul>

                {/* <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>
                        "TaskMaster has transformed how our team collaborates.
                        The intuitive interface and powerful features have
                        significantly improved our productivity."
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <div className={styles.authorAvatar}></div>
                        <div className={styles.authorInfo}>
                            <div className={styles.authorName}>
                                Sarah Johnson
                            </div>
                            <div className={styles.authorRole}>
                                Product Manager, Tech Co
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default LandingPage;
