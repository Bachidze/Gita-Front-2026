import DashboardPhone from "../../assets/dashboardPhone.webp"
import Adamianebi from "../../assets/adamianebi.svg"
import Mesiji from "../../assets/mesiji.svg"
import {motion} from "framer-motion"
 export default function Body() {
  return (
    <>
      <section className="mt-[112px] max-w-[1440px] m-auto">

        <div className="w-[79%] m-auto text-center">
          <div>
            <motion.h1
            initial={{y:500}}
            whileInView={{y:0}}
            transition={{duration:1.8 , ease:"easeOut"}}
            className="text-[26px] leading-[36px] text-[#00252E] font-bold md:text-[44px] xl:text-[50px]">Build The Community Your Fans Will Love</motion.h1>
          </div>

          <div className="mt-6">
            <motion.p
             initial={{y:800}}
             whileInView={{y:0}}
             transition={{duration:1.8 , ease:"easeOut"}}
            className="text-[15px] leading-[21px] md:text-[23px] xl:text-[28px]">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.{" "}
            </motion.p>
          </div>


          <div className="mt-[48px]">
            <motion.button
             initial={{y:600}}
             whileInView={{y:0}}
             transition={{duration:2 , ease:"easeOut"}}
            data-cursor-grow
            className="bg-[#FF52C1] rounded-[20px] text-[14px] text-[white] px-10 py-[11px]">Get Started For Free</motion.button>
          </div>

          <motion.div
           initial={{y:500}}
           whileInView={{y:0}}
           transition={{duration:1.8 , ease:"easeOut"}}
          className="mt-[104px] flex justify-center">
            <img src={DashboardPhone} alt="dashboardPhone" className="md:w-[500px] xl:w-[790px]" />
          </motion.div>


        </div>

        <div className="w-[43%] m-auto mt-[120px] flex flex-col gap-[88px] justify-center items-center">
            <div data-cursor-grow>
                <div><img src={Adamianebi} alt="adamianebiSVG" /></div>
                <div><h2 className="text-[60px]">1.4k+</h2></div>
                <div><p className="text-[#808E9A]">Communities Formed</p></div>
            </div>

            <div data-cursor-grow>
                <div><img src={Mesiji} alt="adamianebiSVG" /></div>
                <div><h2 className="text-[60px]">1.4k+</h2></div>
                <div><p className="text-[#808E9A]">Communities Formed</p></div>
            </div>
        </div>
      </section>
    </>
  );
}
