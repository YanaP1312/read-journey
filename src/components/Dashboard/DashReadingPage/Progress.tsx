const Progress = () => {
    return(
<section className="dashProgFrame">
    <h3 className="dashTitle">Progress</h3>
    <p className="dashProgTitle">Here you will see when and how much you read. 
To record, click on the red button above.</p>
<div className="dashProgWrap">
            <picture>
              <source
                srcSet="../../../public/images/star-dt@2x.png 2x, ../../../public/images/star-dt.png 1x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="../../../public/images/star-mob@2x.png 2x, ../../../public/images/star-mob.png 1x"
                media="(max-width:767px)"
              />
              <img
                src="../../../public/images/star-dt.png"
                width="100"
                height="100"
                alt="books"
              />
            </picture>
          </div>

</section>)

}

export default Progress;