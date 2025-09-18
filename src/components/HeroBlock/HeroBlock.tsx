const HeroBlock = () => {
  return (
    <section className="wrapImgBlock" >
      <picture>
        <source
          srcSet="/images/iPhone15-dt@2x.png 2x, /images/iPhone15-dt.png 1x"
          media="(min-width: 1216px)"
        />
        <source
          srcSet="/images/iPhone15-mob@2x.png 2x, /images/iPhone15-mob.png 1x"
          media="(max-width: 767px)"
        />
        <img
          src="/images/iPhone15-dt.png"
          alt="iPhone15 with Recommended page"
          width="405"
        />
      </picture>
    </section>
  );
};

export default HeroBlock;
