import DashboardPhone from "../../assets/dashboardPhone.webp"
import Adamianebi from "../../assets/adamianebi.svg"
import Mesiji from "../../assets/mesiji.svg"
 export default function Body() {
  return (
    <>
      <section className="mt-[112px] max-w-[1440px] m-auto">

        <div className="w-[79%] m-auto text-center">
          <div>
            <h1 className="text-[26px] leading-[36px] text-[#00252E] font-bold md:text-[44px] xl:text-[50px]">Build The Community Your Fans Will Love</h1>
          </div>
          <div className="mt-6">
            <p className="text-[15px] leading-[21px] md:text-[23px] xl:text-[28px]">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.{" "}
            </p>
          </div>
          <div className="mt-[48px]">
            <button className="bg-[#FF52C1] rounded-[20px] text-[14px] text-[white] px-10 py-[11px] cursor-pointer">Get Started For Free</button>
          </div>
          <div className="mt-[104px] flex justify-center">
            <img src={DashboardPhone} alt="dashboardPhone" className="md:w-[500px] xl:w-[790px]" />
          </div>
        </div>

        <div className="w-[43%] m-auto mt-[120px] flex flex-col gap-[88px] justify-center items-center">
            <div>
                <div><img src={Adamianebi} alt="adamianebiSVG" /></div>
                <div><h2 className="text-[60px]">1.4k+</h2></div>
                <div><p className="text-[#808E9A]">Communities Formed</p></div>
            </div>

            <div>
                <div><img src={Mesiji} alt="adamianebiSVG" /></div>
                <div><h2 className="text-[60px]">1.4k+</h2></div>
                <div><p className="text-[#808E9A]">Communities Formed</p></div>
            </div>
        </div>
      </section>
    </>
  );
}
