"use client";
import styles from "./BirthdayHome.module.css";
import Image from "next/image";
import { useState } from "react";

const carouselCards = [
  // Add your own messages here!
  "You always know how to make me smile.",
  "Your hugs are the warmest place in the world.",
  "You taught me the meaning of unconditional love.",
  "Your smiles are the focus of every room.",
  "You believe in me, even when I doubt myself.",
  "You make every day special just by being you.",
  "You can be the sagar 🙄 ",
];

const journeyPhotos = [
  {
    src: "/journey1.JPG", // Replace with your own photo in /public
    caption: "Always Loving!",
  },
  {
    src: "/journey2.JPG", // Replace with your own photo in /public
    caption: "Always Caring!",
  },
  {
    src: "/journey3.JPG", // Replace with your own photo in /public
    caption: "Always Matching!",
  },
];

const lovedOnesMessages = [
  // Add more messages from friends/family here!
  {
    name: "Ketav Kshatriya",
    message: "You are the soul of my life and you are the heart of our home - your strength, love, and grace make every day brighter",
  },
  {
    name: "Vaishali Pande",
    message: "Wishing you a day as wonderful as you are! Thanks for being my rock and my biggest confidante. Happy Birthday Ruchi!",
  },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Carousel rotation logic
  const nextCard = () => setCarouselIndex((i) => (i + 1) % carouselCards.length);
  const prevCard = () => setCarouselIndex((i) => (i - 1 + carouselCards.length) % carouselCards.length);

  return (
    <div className={styles.gradientBg}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        {/* Replace banner.jpg with your own image in /public */}
        <Image src="/banner.jpg" alt="Birthday Banner" width={1200} height={400} className={styles.bannerImg} priority/>
        <h1 className={styles.title}>Happy Birthday Mamma!</h1>
      </section>

      {/* 3D Carousel Section */}
      <section className={styles.carouselSection}>
        <h2 className={styles.sectionTitle}>What I Love About You</h2>
        <div className={styles.carouselWrapper}>
          <button className={styles.carouselBtn} onClick={prevCard} aria-label="Previous">&#8592;</button>
          <div className={styles.carousel3d}>
            {carouselCards.map((text, idx) => {
              // 3D effect: show only 3 cards, center is active
              const offset = idx - carouselIndex;
              if (Math.abs(offset) > 1) return null;
              return (
                <div
                  key={idx}
                  className={styles.carouselCard}
                  style={{
                    transform: `translateX(${offset * 120}px) scale(${offset === 0 ? 1 : 0.85}) rotateY(${offset * 30}deg)`,
                    zIndex: 2 - Math.abs(offset),
                    opacity: offset === 0 ? 1 : 0.6,
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>
          <button className={styles.carouselBtn} onClick={nextCard} aria-label="Next">&#8594;</button>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className={styles.journeySection}>
        <h2 className={styles.sectionTitle}>Our Journey</h2>
        <div className={styles.journeyPhotos}>
          {journeyPhotos.map((photo, idx) => (
            <div key={idx} className={styles.journeyPhotoBox}>
              {/* Replace src with your own images in /public */}
              <Image src={photo.src} alt={photo.caption} width={220} height={160} className={styles.journeyImg} />
              <div className={styles.journeyCaption}>{photo.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Messages from Loved Ones Section */}
      <section className={styles.messagesSection}>
        <h2 className={styles.sectionTitle}>Messages from Loved Ones</h2>
        <div className={styles.messagesList}>
          {lovedOnesMessages.map((msg, idx) => (
            <blockquote key={idx} className={styles.quoteBox}>
              <p>“{msg.message}”</p>
              <footer>— {msg.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

     {/* Surprise Gift Section */}
<section className={styles.giftSection}>
  <h2 className={styles.sectionTitle}>A Little Surprise</h2>
  <button
    className={styles.giftBtn}
    onClick={() => window.location.href = "/flower.html"}
  >
    Click to Reveal Your Gift
  </button>
</section>

      {/* Thank You Section */}
      <section className={styles.thankYouSection}>
        <h2 className={styles.thankYou}>Thank you for everything, Mamma. Happy Birthday!</h2>
      </section>
    </div>
  );
}
