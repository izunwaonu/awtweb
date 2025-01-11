import ArrowRight from "@/assets/arrow-right.svg";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">
        Contact us now or subscribe to stay updated with our 
        latest services, offers, and tips to grow your business.
        </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1" >
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </section>
  )
};
