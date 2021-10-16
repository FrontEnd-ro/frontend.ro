import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Blog from '~/components/blog/Blog';
import SEOTags from '~/components/SEOTags';

function BlogPage() {
  const articles = [{
    id: 'de-ce-am-inceput-proiectul-si-modulul-de-html',
    title: 'Changelog #1: De ce am început FrontEnd.ro și modulul de HTML',
    cover: {
      width: 1920,
      height: 1080,
      src: `${process.env.CLOUDFRONT_PUBLIC}/public/images/blog/changelog1__800w.jpg`,
    },
    timestamp: 1633870800000,
    firstParagraph: 'Pe scurt, proiectul a început anul trecut în 2020 cand am vazut că domeniul FrontEnd.ro era de vânzare și l-am cumpărat. Dar motivul pentru care am făcut asta este unul mai vechi, deci hai să vă dau și puțin context.',
  }];

  return (
    <>
      <SEOTags
        title="Blog | FrontEnd.ro"
        url="https://FrontEnd.ro/blog"
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/public/seo/blog_1200w.jpg`}
        description="Deși suntem prezenți pe toate platformele din social media, vrem să avem un loc numai al nostru unde vă ținem la curent cu ce lucrăm, ce urmează și cum ne puteți ajuta!"
      />
      <Header withNavMenu />
      <Blog articles={articles} />
      <Footer />
    </>
  );
}

export default BlogPage;
