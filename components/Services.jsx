import { FcCustomerSupport } from "react-icons/fc";
import { BsLightning } from "react-icons/bs";
import { GiShieldcomb } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { IoThumbsUpOutline } from "react-icons/io5";

export default function Services() {
  return (
    <div className="w-full pb-28 pt-[1900px] md:pt-[350px] lg:pt-[200px]">
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-primary text-base font-semibold uppercase tracking-wide">
              Features
            </h2>
            <p className="text-foreground mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
              A better way to build
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl text-xl lg:mx-auto">
              Discover the amazing features that make our product stand out from
              the rest.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0 lg:grid-cols-3">
              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <BsLightning size={30} color="yellow" />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    Fast Performance
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
                  Experience blazing fast speeds with our optimized code and
                  efficient algorithms.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <GiShieldcomb size={30} color="#991b1e" />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    Secure
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
                  Your undefined is safe with our top-notch security measures
                  and protocols.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <VscSettingsGear size={30} color="#B7BF99" />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    Customizable
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
                  Tailor the product to your specific needs with our extensive
                  customization options.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <HiMiniRocketLaunch size={30} color="red" />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    Scalable
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
                  Grow your business without worrying about scaling issues.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <IoThumbsUpOutline size={30} color="#6b7280   " />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    User-Friendly
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
                  Enjoy an intuitive and easy-to-use interface designed for
                  everyone.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="bg-primary text-primary-foreground absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <FcCustomerSupport size={30} />
                  </div>
                  <p className="text-foreground ml-16 text-lg font-medium leading-6">
                    24/7 Support
                  </p>
                </dt>
                <dd className="text-muted-foreground ml-16 mt-2 text-base">
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
