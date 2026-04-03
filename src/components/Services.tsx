const services = [
  {
    title: "Custom Software Development",
    description:
      "We craft bespoke software tailored precisely to your unique needs, from complex enterprise systems to specialized tools. Unlock innovation designed just for you, streamlining processes and gaining a distinct competitive edge.",
    delay: "0",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M120-840h330v330H120v-330Zm60 59v188-188Zm330-59h330v330H510v-330Zm83 59v188-188ZM120-450h330v330H120v-330Zm60 81v189-189Zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135v-135Zm-75-330v210h210v-210H570Zm-390 0v210h210v-210H180Zm0 390v210h210v-210H180Z" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "We develop high-performance web applications, including API development, browser extensions, and intuitive dashboards. Our solutions deliver seamless user experiences and drive your online objectives effectively.",
    delay: "200",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M838-79 710-207v103h-60v-206h206v60H752l128 128-42 43Zm-358-1q-83 0-156-31.5T197-197q-54-54-85.5-126.36T80-478q0-83.49 31.5-156.93Q143-708.36 197-762.68 251-817 324-848.5 397-880 480-880t156 31.5q73 31.5 127 85.82 54 54.32 85.5 127.75Q880-561.49 880-478q0 23-2 44.5t-7 43.5h-63q6-21.67 9-43.33 3-21.67 3-44.47 0-22.8-2.95-45.6-2.94-22.8-8.83-45.6H648q2 23 4 45.5t2 45q0 22.5-1.25 44.5T649-390h-61q3-22 4.5-44t1.5-44q0-22.75-1.5-45.5T588-569H373.42q-3.42 23-4.92 45.5t-1.5 45q0 22.5 1.5 44.5t4.5 44h197v60H384q14 53 34 104t62 86q23 0 45-2.5t45-7.5v60q-23 5-45 7.5T480-80ZM151.78-390H312q-2.5-22-3.75-44T307-478q0-22.75 1-45.5t3-45.5H151.71q-5.85 22.8-8.78 45.6-2.93 22.8-2.93 45.6t2.95 44.47q2.94 21.66 8.83 43.33ZM172-629h149.59q11.41-48 28.91-93.5T395-810q-71 24-129.5 69.5T172-629Zm222 478q-26-41-43.5-86T323-330H172q33 67 91 114t131 65Zm-10-478h193q-13-54-36-104t-61-89q-38 40-61 89.5T384-629Zm255.34 0H788q-35-66-93-112t-129-68q27 41 44.5 86.5t28.84 93.5Z" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Reach your customers everywhere with intuitive and powerful native or cross-platform mobile apps. We deliver exceptional user experiences and robust functionality aligned with your business goals.",
    delay: "300",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M220-140v-680 680ZM647-40q-23 0-44.5-9T566-76L369-311l30-31q16-16 38-18.5t43 5.5l138 56v-371h70q62.7 0 107.35 43.5Q840-583 840-520v330q0 63-43.5 106.5T690-40h-43ZM220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-680q0-24.75 17.63-42.38Q195.25-880 220-880h398q24.75 0 42.38 17.62Q678-844.75 678-820v150h-60v-150H220v680h292l50 60H220Zm199.18-600q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM648-100h42q38 0 64-26.5t26-63.5v-330q0-38-26-64t-64-26h-12v409L457-301l152 183q7 9 17.5 13.5T648-100Z" />
      </svg>
    ),
  },
  {
    title: "SaaS Development",
    description:
      "Design, develop, and launch scalable SaaS platforms from concept to deployment. We build multi-tenant, secure solutions that deliver continuous value and sustainable recurring revenue.",
    delay: "400",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="m187-551 106 45q18-36 38.5-71t43.5-67l-79-16-109 109Zm154 81 133 133q57-26 107-59t81-64q81-81 119-166t41-192q-107 3-192 41T464-658q-31 31-64 81t-59 107Zm229-96q-20-20-20-49.5t20-49.5q20-20 49.5-20t49.5 20q20 20 20 49.5T669-566q-20 20-49.5 20T570-566Zm-15 383 109-109-16-79q-32 23-67 43.5T510-289l45 106Zm326-694q9 136-34 248T705-418l-2 2-2 2 22 110q3 15-1.5 29T706-250L535-78l-85-198-170-170-198-85 172-171q11-11 25-15.5t29-1.5l110 22q1-1 2-1.5t2-1.5q99-99 211-142.5T881-877ZM149-325q35-35 85.5-35.5T320-326q35 35 34.5 85.5T319-155q-26 26-80.5 43T75-80q15-109 31.5-164t42.5-81Zm42 43q-14 15-25 47t-19 82q50-8 82-19t47-25q19-17 19.5-42.5T278-284q-19-18-44.5-17.5T191-282Z" />
      </svg>
    ),
  },
  {
    title: "ERP & CRM Development",
    description:
      "Integrate and optimize your core business processes with powerful Enterprise Resource Planning and Customer Relationship Management solutions. Gain real-time insights, automate workflows, and enhance operational efficiencies.",
    delay: "500",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M80-120v-720h390v165h410v555H80Zm60-60h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm0-165h105v-105H140v105Zm165 495h105v-105H305v105Zm0-165h105v-105H305v105Zm0-165h105v-105H305v105Zm0-165h105v-105H305v105Zm165 495h350v-435H470v105h80v60h-80v105h80v60h-80v105Zm185-270v-60h60v60h-60Zm0 165v-60h60v60h-60Z" />
      </svg>
    ),
  },
  {
    title: "MVP Development",
    description:
      "Launch faster, learn quicker, and validate your innovative ideas with strategically built Minimum Viable Products. Get to market swiftly and smartly, gathering crucial feedback without extensive initial investment.",
    delay: "600",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M120-40v-880h60v80h600v-80h60v880h-60v-80H180v80h-60Zm60-469h110v-160h220v160h270v-271H180v271Zm0 329h270v-160h220v160h110v-269H180v269Zm170-329h100v-100H350v100Zm160 329h100v-100H510v100ZM350-509h100-100Zm160 329h100-100Z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "We design user experiences that blend functionality with aesthetics, creating intuitive interfaces that engage and delight. From research and wireframing to interactive prototypes, we align design with user behavior and business goals. Deliver digital products that not only look exceptional but also convert effectively.",
    delay: "600",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="m357-513 90-90-75-75-48 48-42-42 48-48-75-74-90 90 192 191Zm346 348 90-91-75-75-48 48-42-42 48-48-74-74-90 90 191 192Zm8-615 70 70-70-70ZM276-120H120v-156l194-194L80-704l174-176 236 235 178-178q9-9 20-13t22-4q11 0 22 4t20 13l71 71q9 9 13 20t4 22q0 11-4 22t-13 20L645-490l235 235L705-81 471-315 276-120Zm-96-60h70l393-394-70-70-393 394v70Zm428-429-35-35 70 70-35-35Z" />
      </svg>
    ),
  },
  {
    title: "SEO Services",
    description:
      "Enhance your online visibility with strategies designed to rank higher and reach the right audience. We optimize your website through keyword research, technical improvements, and quality backlinks, ensuring lasting impact. In addition, we manage Google Ads and Meta Ads campaigns to drive targeted traffic and maximize ROI, giving your business the competitive edge it needs.",
    delay: "600",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M121-473v-60h126v60H121Zm114 231-40-40 88-88 40 40-88 88Zm48-397-88-88 40-40 88 88-40 40Zm457 480L552-347l-44 136-104-360 352 111-138 49 187 187-65 65ZM437-714v-126h60v126h-60Zm214 75-40-40 88-88 40 40-88 88Z" />
      </svg>
    ),
  },
  {
    title: "Staffing Services",
    description:
      "Scale your team with the right talent, exactly when you need it. We provide flexible staffing solutions; temporary, contract, or full-time; that connect you with skilled professionals who fit seamlessly into your business. Gain agility, reduce hiring overhead, and ensure you always have the expertise to meet your goals.",
    delay: "700",
    icon: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#01014f"
      >
        <path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.41-18h59.18Q534-880 552-862q18 18 18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.41 16h-59.18Q426-530 408-546q-18-16-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="section services__v3" id="services">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-8 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">
              Our Services
            </span>
            <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">
              Explore how our solutions can simplify complexities and unlock your full potential.
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between gap-5">
                <div>
                  <span className="icon mb-4">{service.icon}</span>
                  <h3 className="fs-5 mb-3">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
