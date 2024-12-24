import { useUser } from '@clerk/nextjs';
import styles from '../styles/MembersPage.module.css';
import Head from 'next/head';
import { UserButton } from '@clerk/nextjs';

export default function MembersPage() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className={styles.notSignedIn}>
        <div className={styles.signInContainer}>
          <h1>Members Area</h1>
          <p>Please sign in to access exclusive content</p>
          <button className={styles.signInButton} onClick={() => window.location.href = '/sign-in'}>
            Sign In to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Members Area - Course Modules</title>
      </Head>
      <div className={styles.membersPage}>
        <div className={styles.userButtonContainer}>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className={styles.content}>
          <h1>Welcome to Your Course</h1>
          <p className={styles.subtitle}>Select a module to begin your journey</p>
          
          <div className={styles.moduleGrid}>
            <div className={styles.moduleCard}>
              <h2>Module 1</h2>
              <p>Introduction to Basics</p>
              <a href="/module1" className={styles.moduleLink}>Start Learning</a>
            </div>
            
            <div className={styles.moduleCard}>
              <h2>Module 2</h2>
              <p>Advanced Techniques</p>
              <a href="/module2" className={styles.moduleLink}>Start Learning</a>
            </div>
            
            <div className={styles.moduleCard}>
              <h2>Module 3</h2>
              <p>Master the Skills</p>
              <a href="/module3" className={styles.moduleLink}>Start Learning</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
