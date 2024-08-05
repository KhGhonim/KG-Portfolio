export default function Services() {
  return (
    <div className="w-full py-72 md:py-80  ">
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
                    <img
                      alt="lightning-bolt"
                      src="https://openui.fly.dev/openui/24x24.svg?text=⚡"
                    />
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
                    <img
                      alt="shield"
                      src="https://openui.fly.dev/openui/24x24.svg?text=🛡️"
                    />
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
                    <img
                      alt="gear"
                      src="https://openui.fly.dev/openui/24x24.svg?text=⚙️"
                    />
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
                    <img
                      alt="rocket"
                      src="https://openui.fly.dev/openui/24x24.svg?text=🚀"
                    />
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
                    <img
                      alt="thumbs-up"
                      src="https://openui.fly.dev/openui/24x24.svg?text=👍"
                    />
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
                    <img
                      alt="support"
                      src="https://openui.fly.dev/openui/24x24.svg?text=💬"
                    />
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
