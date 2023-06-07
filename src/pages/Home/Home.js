import "./Home.scss";
export default function Home() {
  return (
    <>
      <div className="home-hero">
        <h1>The Satanic Temple Mission</h1>
        <div className="home-hero__body">
          <img
            className="home-hero__image"
            src="https://cdn.shopify.com/s/files/1/0428/0465/files/unnamed.jpg?v=1640719503"
          />
          <p className="home-hero__text">
            The mission of The Satanic Temple, a religious organization, is to
            encourage benevolence and empathy among all people, reject
            tyrannical authority, advocate practical common sense, oppose
            injustice, and undertake noble pursuits. The Satanic Temple has
            publicly confronted hate groups, fought for the abolition of
            corporal punishment in public schools, applied for equal
            representation when religious installations are placed on public
            property...
          </p>
        </div>
      </div>
      <div className="home-hero"></div>
    </>
  );
}
