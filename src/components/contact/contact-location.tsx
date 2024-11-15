import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Chicago, USA",
    time: "12:00 pm GMT+2",
    location_title: "Lagos Labs LLC",
    address: "2000 S Michigan Avenue Unit C2, <br /> Chicago, IL 60616",
    phone: "(+1) 773 809 7774",
    email: "hello@lagoslabs.dev",
  },
  {
    id: 2,
    img: location_2,
    country: "London, UK",
    time: "11:00 pm GMT+2",
    location_title: "Lagos Labs Limited",
    address: "20 Celeste House, 10 Beaufort Square <br /> Colindale, NW9 4BP",
    phone: "(+44) 740 430 5566",
    email: "hello@lagoslabs.dev",
  },
  {
    id: 3,
    img: location_3,
    country: "Lagos, Nigeria",
    time: "10:00 pm GMT+2",
    location_title: "Lagos Labs Limited",
    address: "65 Raymond Njoku Ikoyi <br /> Lagos, Nigeria 106104",
    phone: "(+234) 916 985 6320 ",
    email: "hello@lagoslabs.dev",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <a
                          href="https://maps.app.goo.gl/AqpshFg7PyhrRQYt8"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></a>
                      </div>
                      <div className="cn-contact-map">
                        <a href="https://maps.app.goo.gl/AqpshFg7PyhrRQYt8">Google Maps</a>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <a href="tel:(+1)773 809 7774">{item.phone}</a> <br />
                      <a href="mailto:Hello@lagoslabs.dev">{item.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
