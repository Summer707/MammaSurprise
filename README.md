# 🎂 Mom's Birthday Website

This is a beautiful, sentimental birthday website for your mom, built with Next.js and CSS modules.

## 🚀 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🖼️ Customizing the Site

- **Banner Image:**
  - Replace `public/banner.jpg` with your own beautiful banner photo.
- **Our Journey Photos:**
  - Replace `public/journey1.jpg`, `journey2.jpg`, and `journey3.jpg` with your own images.
  - Update captions in `src/app/page.tsx` in the `journeyPhotos` array.
- **3D Carousel:**
  - Edit the `carouselCards` array in `src/app/page.tsx` to add your own messages about what you love about your mom.
- **Messages from Loved Ones:**
  - Add or edit messages in the `lovedOnesMessages` array in `src/app/page.tsx`.
- **Surprise Gift:**
  - Change the message or add an animation in the `giftReveal` section in `src/app/page.tsx`.

## 🎨 Styling

- All custom styles are in `src/app/BirthdayHome.module.css`.
- The site uses elegant pinks, golds, and soft gradients, and is fully responsive.

## 🌐 Deploying

- You can deploy this site for free on [Vercel](https://vercel.com/) or any platform that supports Next.js.

---

Happy Birthday to your amazing mom! 🎉

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
