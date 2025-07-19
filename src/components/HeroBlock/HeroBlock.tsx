const HeroBlock = () => {
  return (
    <div>
      <picture>
        <source
          srcSet="../../../public/images/iPhone15-dt@2x.png 2x, ../../../public/images/iPhone15-dt.png 1x"
          media="(min-width: 1216px)"
        />
        <source
          srcSet="../../../public/images/iPhone15-mob@2x.png 2x, ../../../public/images/iPhone15-mob.png 1x"
          media="(max-width: 767px)"
        />
        <img
          src="../../../public/images/iPhone15-dt.png"
          alt="iPhone15 with Recommended page"
          width="405"
          height="656"
        />
      </picture>
    </div>
  );
};

export default HeroBlock;
