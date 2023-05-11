import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";

/**********  Hero Images **********/
import HeroOne from '../assets/images/6H2A5239.png';
import HeroTwo from '../assets/images/6H2A5247.png';
import HeroThree from '../assets/images/6H2A5266.png';
import HeroFour from '../assets/images/6H2A5333.png';

/**********         SVGS       **********/
import Email from '../assets/svg/email.svg';
import Instagram from '../assets/svg/instagram.svg';
import ArrowDown from '../assets/svg/arrowDown.svg';

/**********  About Images **********/
import AboutImage from '../assets/images/6H2A5285.png'

/**********  Services Images **********/
import ArtworkOne from '../assets/images/artwork/art2.png';

/**********  Hero  **********/
const Hero = () => {

  // Conversion of SVGs to usable Images
  const emailSvg : StaticImageData = Email as StaticImageData;
  const instagramSvg : StaticImageData = Instagram as StaticImageData;
  const ArrowDownSvg : StaticImageData = ArrowDown as StaticImageData;

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <span className={styles.heroName}>SHANNON MOSIER</span>
          <span className={styles.heroTitle}>YOUR VIRTUAL ASSISTANT</span>
        </div>
        <div className={styles.heroImages}>
          <div className={styles.heroImagesContent}>
            <Image src={HeroOne} width={438} height={657} alt="HeroOne" />
            <Image src={HeroTwo} width={438} height={657} alt="HeroTwo" />
            <Image src={HeroThree} width={438} height={657} alt="HeroThree" />
            <Image src={HeroFour} width={438} height={657} alt="HeroFour" />
          </div>
          <div className={styles.heroImagesText}>
            <span className={styles.heroImagesTextBegin}>it's time to outsource </span>
            <span className={styles.heroImagesTextEnd}>AND I'M YOUR GIRL</span>
          </div>
        </div>
        <div className={styles.heroAbout}>
          <span className={styles.heroAboutTitle}>...LET ME HELP YOU AND YOUR BUSINESS</span>
          <span className={styles.heroAboutText}>as a business owner, you know how challenging it can be to manage all aspects of your enterprise. it often feels like you're wearing multiple hats and carrying an immense amount of responsibility. if you're currently feeling overwhelmed and stressed, it may be time to consider seeking help. that's where I come in - i can be your personal cheerleader, supporting and encouraging you every step of the way. my goal is to help your business not just survive but thrive, while also freeing up some of your valuable time. if this sounds like what you need, i'd love to chat with you and explore how we can work together.</span>
          <div className={styles.heroAboutBottom}>
            <div className={styles.heroAboutBottomMenuItems}>
              <div className={styles.heroAboutBottomMenuList}>
                <span className={styles.heroAboutBottomMenuListItem}>ABOUT</span>
                <span className={styles.heroAboutBottomMenuListItem}>SERVICES</span>
                <span className={styles.heroAboutBottomMenuListItem}>CONTACT</span>
              </div>
            </div>
            <div className={styles.heroAboutBottomSocialMedia}>
              <Image src={emailSvg} width={30} height={30} alt="Email" />
              <span className={styles.heroAboutBottomSocialMediaEmail}> shannonmosierllc@gmail.com</span>
              <Image src={instagramSvg} width={30} height={30} alt="Instagram" />
              <span className={styles.heroAboutBottomSocialMediaInstagram}> @shannon_VA</span>
            </div>
          </div>
        </div>
        <div className={styles.next}>
          <span className={styles.nextSectionDenote}>01</span>
          <div className={styles.nextSectionDivider}></div>
          <span className={styles.nextSectionName}>ABOUT</span>
          <Image src={ArrowDownSvg} width={30} height={30} alt="ArrowDown"/>
        </div>
      </div>
    </div>
  )
};

/**********  About  **********/
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader}>
          <span className={styles.aboutGreeting}>MEET SHANNON MOSIER</span>
          <div className={styles.aboutDivider}></div>
          <span className={styles.aboutName}>ABOUT</span>
        </div>
        <div className={styles.aboutContentText}>
          <span className={styles.aboutText}>HI, I'M SHANNON! I'M ALL ABOUT LIVING LIFE TO THE FULLEST AND ENJOYING MUSIC, NATURE, AND NEW EXPERIENCES. BUT IN MY PREVIOUS JOBS, I FOUND MYSELF BURNT OUT AND QUESTIONING WHAT I WAS DOING. A MEDICAL DIAGNOSIS REMINDED ME OF HOW SHORT LIFE IS, AND I DECIDED TO TAKE CONTROL BY USING MY SKILLS TO HELP OTHERS AS A VIRTUAL ASSISTANT. AS A VA, I CAN PROVIDE SMALL BUSINESS OWNERS WITH THE FREEDOM AND REDUCED STRESS THAT I CRAVED IN MY PREVIOUS ROLES. BY TAKING ON TASKS THAT CONSUME TIME AND ENERGY, I CAN HELP YOU FOCUS ON WHAT REALLY MATTERS.<br/><br/>- MUSIC ENTHUSIAST<br/>- TRUE-CRIME DOCUMENTARY LOVER<br/>- FUR BABY ADVOCATE (BRUCE, AND LADYBUG)<br/><br/>SO HERES TO ROCKING THE VIRTUAL ASSITANT WORLD!</span>
        </div>
      </div>
      <div className={styles.aboutOpacity}></div>
    </div>
  )
};


/**********  Services  **********/
const Services = () => {

  const ArrowDownSvg : StaticImageData = ArrowDown as StaticImageData;

  return (
    <div className={styles.services}>
      <div className={styles.offeredServices}>
        <div className={styles.serviceDescription}>
          <span className={styles.serviceDescText}>when it comes to outsourcing, i understand that entrusting your work to someone else can feel intimidating. that's why i recommend scheduling a discovery call with me. during this call, we can get to know each other better, discuss your needs, and determine how we can work together seamlessly. it's a chance for you to see how i can support you and your business. let's connect and explore the possibilities of working together.</span>
        </div>
        <div className={styles.whatServices}>
          <span className={styles.whatServTitle}> a few of the services i offer:</span>
          <span className={styles.whatServText}> SOCIAL MEDIA MANAGEMENT <br/> PINTEREST MANAGEMENT <br/> E-MAIL MANAGEMENT <br/> WEBSITE MAINTENANCE <br/> AND MORE...</span>
        </div>
      </div>
      <div className={styles.next}>
          <span className={styles.nextSectionDenote}>02</span>
          <div className={styles.nextSectionDivider}></div>
          <span className={styles.nextSectionName}>SERVICES</span>
          <Image src={ArrowDownSvg} width={30} height={30} alt="ArrowDown"/>
        </div>
      <div className={styles.serviceContent}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideHeader}>
            <span className={styles.leftSideHeaderText}> &quot;what services </span>
            <span className={styles.leftSideHeaderText}> DO I OFFER?&quot; </span>
            <div className={styles.leftSideHeaderDivider}></div>
          </div>
          <div className={styles.leftSideTextContent}>
            <span className={styles.leftSideTitle}>PINTEREST MANAGEMENT</span>
            <span className={styles.leftSideText}> -account setup & optimization <br/> -up to 400 pins for the month <br/> -keyword/hashtag research <br/> -5 new pins each week <br/> -10+ relevant boards <br/> -monthly analytics report </span>
            
          </div>
          <span className={styles.leftSideNext}> &lt; next service &gt;</span>
        </div>
        <div className={styles.rightSide}>
          <Image src={ArtworkOne} width={305} height={435} alt="Artwork Image" />
        </div>
      </div>
      <div className={styles.next}>
          <span className={styles.nextSectionDenote}>03</span>
          <div className={styles.nextSectionDivider}></div>
          <span className={styles.nextSectionName}>CONTACT</span>
          <Image src={ArrowDownSvg} width={30} height={30} alt="ArrowDown"/>
        </div>
    </div>
  )
};

/**********  Footer  **********/
const Footer = () => {
  const ArrowDownSvg : StaticImageData = ArrowDown as StaticImageData;

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.readyText}>
          <span className={styles.readyTextText}> ready to </span>
          <span className={styles.readyTextText}> WORK TOGETHER?! </span>
        </div>
        <div className={styles.calendlyBox}>
          <span className={styles.calendlyLink}> calendly link </span>
          <Image src={ArrowDownSvg} width={34} height={34} alt="Arrow right" className={styles.footerArrowRight}/>
        </div>
        <span className={styles.copyright}>© 2023 Shannon Mosier LLC., all rights reserved, Design by &nbsp;<span className={styles.max}>Max Mosier</span></span>
      </div>
      <div className={styles.footerOpacity}></div>
      
    </div>
  )
};

/**********  Home  **********/
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shannon | Virtual Assistant</title>
        <meta name="description" content="Shannon Virtual Assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero/>
        <About/>
        <Services/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
