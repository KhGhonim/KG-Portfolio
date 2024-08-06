import { FcCustomerSupport } from "react-icons/fc";
import { BsLightning } from "react-icons/bs";
import { GiShieldcomb } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { IoThumbsUpOutline } from "react-icons/io5";

export default function Services() {
  return (
    <div className="w-full pt-[700px] pb-28 md:py-[100px]  ">
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
              A better way to build
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              Discover the amazing features that make our product stand out from
              the rest.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <BsLightning size={30} color="yellow" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    Fast Performance
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Experience blazing fast speeds with our optimized code and
                  efficient algorithms.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <GiShieldcomb size={30} color="#991b1e" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    Secure
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Your undefined is safe with our top-notch security measures
                  and protocols.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <VscSettingsGear size={30} color="#B7BF99" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    Customizable
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Tailor the product to your specific needs with our extensive
                  customization options.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <HiMiniRocketLaunch size={30} color="red" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    Scalable
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Grow your business without worrying about scaling issues.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <IoThumbsUpOutline size={30} color="#6b7280   " />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    User-Friendly
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Enjoy an intuitive and easy-to-use interface designed for
                  everyone.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                    <FcCustomerSupport size={30} />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">
                    24/7 Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">
                  Get help whenever you need it with our round-the-clock support
                  team.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
