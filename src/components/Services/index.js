import React, { useState, useEffect } from "react";


function Services() {
  const [servicesData, setServicesData] = useState([
    {
      id: 1,
      title: "Web Design",
      icon: "bx bxs-grid-alt services__icon",
      description: [
        "Creating visually stunning websites that engage visitors and convey a client's brand identity.",
        "Designing logos, banners, and other visual elements to enhance a website's aesthetics and brand recognition.",
        "Refreshing or updating an existing website to improve its functionality and aesthetics.",
        "Designing optimized landing pages that drive conversions and help businesses achieve their marketing goals.",
      ],
    },
    {
      id: 2,
      title: "Frontend",
      icon: "bx bx-code services__icon",
      description: [
        "Creating custom websites using HTML, CSS, and JavaScript to meet the requirements.",
        "Designing websites that work and look great on all devices, from desktops to smartphones.",
        "Optimizing website speed and performance to enhance user experience and improve search engine ranking.",
      ],
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: "bx bx-palette services__icon",
      description: [
        "Creating visually appealing graphics for social media, marketing materials, and other purposes.",
        "Designing logos, business cards, brochures, and other print materials to help businesses stand out from the competition.",
        "Developing brand guidelines and visual identities to ensure consistency across all marketing channels.",
      ],
    },
    {
      id: 4,
      title: "Admin Task",
      icon: "bx bx-palette services__icon",
      description: [
        "Accurately and efficiently inputting data into digital databases or spreadsheets.",
        "Analyzing and interpreting data to inform business decisions and creating reports to present findings.",
        "Create dashboard using Excel or Power BI",
        "Data Cleaning",
        "Data visualization",
      ],
    },
  ]);

  useEffect(() => {
    // fetch services data from API
    const fetchData = async () => {
      const response = await fetch("/services");
      const data = await response.json();
      setServicesData(data);
    };

    fetchData();
  }, []);

  const openModal = (id) => {
    const modal = document.getElementById(`modal-${id}`);
    modal.classList.add("active-modal");
  };

  const closeModal = () => {
    const modals = document.querySelectorAll(".services__modal");
    modals.forEach((modal) => modal.classList.remove("active-modal"));
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={service.icon}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => openModal(service.id)}
            >
              View more
              <i className="bx bx-right-arrow-alt button__icon"></i>
            </span>

            <div
              className="services__modal"
              id={`modal-${service.id}`}
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">{service.title}</h4>
                <i
                  className="bx bx-x services__modal-close"
                  onClick={() => closeModal()}
                ></i>

                <ul className="services__modal-services grid">
                  {service.description.map((desc, i) => (
                    <li key={i} className="services__modal-service">
                      <i className="bx bx-check-circle services__modal-icon"></i>
                      <p>{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
