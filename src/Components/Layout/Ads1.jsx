import React from 'react'
import Container from "/src/Components/Common/Container";
import Flex from "/src/Components/Common/Flex";
import Images from "/src/Components/Common/Images";
import adsImg1 from "/src/assets/Ad_1.jpg";
import adsImg2 from "/src/assets/Ad_2.png";
import adsImg3 from "/src/assets/Ad_3.jpg";
import { Link } from 'react-router-dom';
const Ads1 = () => {
  return (
    <div>
      <Container className={`py-20`}>
        <Flex className={`justify-between gap-5`}>
            <div className="w-[49%] px-5">
                <Link>
                    <Images src={adsImg1} alt={adsImg1} />
                </Link>
                
            </div>
            <div className="w-[49%] px-5 flex flex-col gap-6">
                <Link>
                    <Images src={adsImg2} alt={adsImg2} />
                </Link>
                <Link>
                    <Images src={adsImg3} alt={adsImg3} />
                </Link>

            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Ads1
