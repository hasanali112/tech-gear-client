import Container from "@/app/component/shared/Container/Container";

const About = () => {
  return (
    <div className="bg-[#e5e7eb]">
      <div className="bg-white p-5 shadow-md">
        <Container>
          <h1 className="inline-flex items-center gap-4 text-3xl">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            About Us
          </h1>
        </Container>
      </div>
      <Container className="bg-white rounded-md mt-7 shadow-md">
        <div className="pb-10">
          <h1 className="text-3xl font-semibold pt-6">Tech Gear</h1>
          <h1 className="text-2xl font-semibold pt-6">About Tech Gear</h1>
          <p className="mt-4 ">
            Tech Gear, founded on March 1, 2007, has grown to become a renowned
            brand, celebrated for its commitment to customer satisfaction. With
            the motto Customers Come First, Tech Gear has established itself as
            a leading computer and tech retailer in the United States. The
            company boasts a workforce of over 700 employees and has expanded
            its presence across six central territories: New York, California,
            Texas, Florida, Illinois, and Washington, operating a total of 17
            physical outlets.
          </p>
          <p className="mt-4">
            In New York alone, there are nine outlets, given its status as a
            major metropolitan area. Additionally, California, a major tech hub,
            hosts two branches. The remaining branches are strategically located
            in Texas, Florida, Illinois, and Washington. Each outlet offers a
            wide range of genuine tech products, including the latest computers,
            peripherals, and accessories from top brands.
          </p>
          <p className="mt-4">
            Beyond these physical stores, Tech Gear also runs a successful
            E-Commerce website, catering to a wide range of tech needs across
            the nation. The online platform features an extensive inventory,
            competitive pricing, and reliable customer service, making it a top
            choice for tech enthusiasts and professionals alike. Tech Gears
            commitment to innovation and customer satisfaction is evident in its
            comprehensive service offerings. The company provides expert
            technical support, installation services, and personalized
            consultations to ensure customers receive the best possible
            experience. Tech Gear also hosts regular workshops and events to
            keep customers informed about the latest trends and advancements in
            technology. To further enhance the customer experience, Tech Gear
            offers a robust loyalty program, rewarding repeat customers with
            exclusive discounts, early access to sales, and special promotions.
            The company also partners with leading tech brands to provide
            exclusive product launches and limited-edition items available only
            at Tech Gear. Tech Gear is also dedicated to corporate social
            responsibility, engaging in various community initiatives and
            sustainability efforts. The company actively participates in local
            tech education programs, sponsors coding camps for youth, and
            donates equipment to schools and non-profit organizations.
            Additionally, Tech Gear is committed to reducing its environmental
            footprint through recycling programs, energy-efficient store
            designs, and promoting eco-friendly products. As Tech Gear continues
            to grow, it remains dedicated to its founding principles, striving
            to be the premier destination for tech products and services in the
            United States. With a focus on quality, innovation, and customer
            satisfaction, Tech Gear is poised to lead the industry for years to
            come.
          </p>
          <h1 className="text-2xl font-semibold pt-6">
            ISO Certified Quality Management System
          </h1>
          <p className="mt-4">
            Tech Gear has always managed the standards for Quality management.
            In 2022, Star Tech Ltd. was certified with the well-known ISO
            9001:2015 certification. This marked a groundbreaking achievement
            for us. As an ISO 9001:2015 certified organization; we consistently
            maintain all sorts of regulatory requirements to provide the best
            products and services to meet any customer requirement.
          </p>
          <h1 className="text-2xl font-semibold pt-6">
            The Brand That Cares For You
          </h1>
          <p className="mt-4">
            This is TECH GEAR! A Brand that is Truly concerned about its
            customers and loyally provides all the needs of the customers.
            Customers come first to this Company. Our customers will receive the
            best service and deals that Tech gear offers. To us, our customers
            wants and needs take the top priority. We always have and will aim
            to provide the perfect result to our loyal customers. And our
            after-sales service will ensure that no one of our customers will
            come to us with the same issue twice. Come and Experience the
            service, product, and facilities Tech gear offers.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
