import { ServicePageObj } from "../../types";
import protection from "../../assets/img/protection.png";
import personal from "../../assets/img/personal.png";
import cit from "../../assets/img/cash-in-transit.png";
import cam from "../../assets/img/scam.png";
import alarm from "../../assets/img/alarm.png";
import courier from "../../assets/img/courier.png";
import investigation from "../../assets/img/investigation.png";
import event from "../../assets/img/event.png";
import gps from "../../assets/img/gps.png";

const servicesList: ServicePageObj[] = [
  {
    title: "Protection Officers",
    shortDescription:
      "At Fortress we offer a wide range of efficient and professional manned security services including Stationary Guards (Firearm and Baton Officers), K9 Officers, Sentry/Front Desk Security and Mobile Patrols.",
    longDescription: `Fortress Security's Protection Officers are highly trained security professionals who are dedicated to safeguarding people, property and assets. Our Protection Officers provide customized security solutions that are tailored to meet the unique needs of each client. They are equipped with the latest security technology and are trained to respond quickly and effectively to any security threat.

Fortress Security's Protection Officers are carefully screened and rigorously trained to ensure that they possess the skills and expertise necessary to provide exceptional security services. They are trained in areas such as access control, emergency response, crowd management, and conflict resolution. Our Protection Officers are also equipped with the latest communication and surveillance technology to ensure they can maintain real-time situational awareness and respond quickly to any security breach.

At Fortress Security, we understand that every client has unique security needs, which is why we work closely with our clients to design and implement customized security solutions. Our Protection Officers are an integral part of these solutions, providing a visible security presence and ensuring the safety and security of our clients' people and property.`,
    category: "protection",
    thumbnail: protection,
    img_urls: [
      "https://plus.unsplash.com/premium_photo-1663047796646-975442b1538b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "Personal Protection",
    shortDescription:
      "Our personal protection officers are highly trained and specificly selected for the task at hand of offering personal protection to diplomats, government officials and family members",
    longDescription: `Fortress Security provides a comprehensive range of personal protection services to ensure the safety and security of individuals and their families. Our experienced protection officers are highly trained and equipped with the latest security technology to provide customized personal protection solutions to meet our clients' unique needs.

Our personal protection services include close protection, which involves providing 24/7 protection to high-profile individuals such as celebrities, politicians, and executives. We also provide executive protection services to business executives and their families who require discreet and professional protection.

In addition, we offer residential protection services that include securing homes and properties against potential threats such as theft, vandalism, and unauthorized entry. Our protection officers are trained to recognize and respond to potential threats, providing peace of mind to our clients and their families.

At Fortress Security, we understand that personal protection is a serious matter, and we are committed to providing our clients with the highest level of protection possible. Our team works closely with clients to understand their needs and concerns, and we develop customized protection plans to ensure their safety and security.

We pride ourselves on our attention to detail, professionalism, and dedication to our clients' safety. Whether you require personal protection for yourself, your family, or your business, you can trust Fortress Security to provide you with the best protection services available.`,
    category: "protection",
    thumbnail: personal,
    img_urls: [
      "https://plus.unsplash.com/premium_photo-1663047796646-975442b1538b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },

  {
    title: "Cash In Transit",
    shortDescription:
      "Our Cash in Transit service provides secure and reliable transportation of funds to and from any location including banks, businesses and personal transport.",
    longDescription: `Fortress Security's Cash in Transit service provides safe and secure transportation of cash, valuables, and other high-value assets from one location to another. Our team of highly trained security professionals ensure the safety and protection of your assets during transit.

We use state-of-the-art security measures, including armored vehicles and armed security personnel, to ensure your valuable assets are transported securely and efficiently. Our team has extensive experience in Cash in Transit services and follows strict safety procedures and protocols to ensure the highest level of security during the entire process.

We understand that the safety of your assets is of utmost importance, which is why we tailor our services to meet your specific needs and requirements. Whether you need cash and valuables transported to a bank or other financial institution, or need to transport high-value assets to a secure location, our team is here to provide you with the highest level of security and protection.

Our Cash in Transit service is designed to provide a reliable, secure, and efficient solution for your transportation needs. With Fortress Security, you can rest assured that your valuable assets are in safe hands, and we will go above and beyond to ensure they reach their destination safely and securely.`,
    category: "courier",
    thumbnail: cit,
    img_urls: [
      "https://images.unsplash.com/photo-1643941832707-be654a4e03e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFybW9yZWQlMjB0cnVja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1593166250304-cbcb75ed3b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJtb3JlZCUyMHRydWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },

  {
    title: "CCTV, Access Control and Alarms",
    shortDescription:
      "At Fortress Security Service we offer a wide range of electronical services such as :- CCTV cameras for any location, access control systems such as key card entry, and various alarm systems.",
    longDescription: `Fortress Security provides a comprehensive range of security solutions that can be tailored to meet the specific needs of any business or property. Our CCTV, Access Control and Alarms service is designed to provide clients with peace of mind and ensure that their assets, employees and customers are protected at all times.

Our CCTV systems are high-quality and can be installed in a variety of environments, including indoor and outdoor settings. They allow for real-time monitoring, remote access and digital recording, ensuring that any security incidents can be reviewed and investigated quickly and efficiently.

Our Access Control systems provide an additional layer of security by restricting access to certain areas or buildings to authorized personnel only. These systems can be customized to suit the specific needs of any business or property and can include features such as keycard access, biometric scanners and intercoms.

Our Alarm systems are designed to detect any potential security breaches and alert the relevant authorities immediately. They can be configured to include a range of sensors, such as motion detectors, glass break sensors and door contacts, and can be integrated with other security systems for maximum effectiveness.

Overall, Fortress Security's CCTV, Access Control and Alarms service is an essential component of any comprehensive security plan, providing businesses and property owners with the tools they need to protect their assets, employees and customers from harm.`,
    category: "monitoring",
    thumbnail: cam,
    img_urls: [
      "https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJpdHklMjBjYW1lcmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VjdXJpdHklMjBjYW1lcmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "Alarm Monitoring",
    shortDescription:
      "Fortress Security Services Limited’s monitoring packages all include professional monitoring 24 hours a day, 7 days a week, and 365 days a year.",
    longDescription: `Alarm Monitoring is an essential service offered by Fortress Security, a leading security company. It involves constant and real-time monitoring of alarm systems installed at various locations, including homes, businesses, and government buildings, to ensure that any security breach or emergency is quickly detected and responded to. 

When an alarm is triggered, the monitoring system at Fortress Security's central station receives an alert, and trained professionals quickly assess the situation. They use advanced technology to identify the location of the alarm and determine the nature of the emergency, whether it's a fire, a break-in, or a medical emergency. 

Once the nature of the emergency is determined, the monitoring team dispatches the appropriate emergency services, such as the police, fire department, or medical services. In addition, Fortress Security can also send its own highly trained response teams to the location to assist in the resolution of the emergency.

With Fortress Security's Alarm Monitoring service, you can rest assured that your property and loved ones are always protected. The service is available 24/7, 365 days a year, and is supported by state-of-the-art technology and highly trained professionals who are dedicated to your safety and security.`,
    category: "monitoring",
    thumbnail: alarm,
    img_urls: [
      "https://images.unsplash.com/photo-1549109926-58f039549485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJpdHklMjBjYW1lcmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VjdXJpdHklMjBjYW1lcmFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "Courier Services",
    shortDescription:
      "We deliver all types of packages. Including messages, money and mail. All packages are secure and delivered on a timely basis. Packages can also be tracked up until delivery.",
    longDescription: `Fortress Security's courier service is a highly reliable and secure way to transport important items and documents from one location to another. Our experienced and well-trained security personnel will handle the delivery of your items with the utmost care and attention to detail.

We offer a variety of courier services, including same-day and overnight delivery, as well as custom delivery options to meet your specific needs. Our fleet of secure vehicles and trained drivers ensure that your items arrive safely and on time, every time.

At Fortress Security, we understand the importance of confidentiality and security when it comes to courier services. That's why we use state-of-the-art technology and protocols to safeguard your items during transport, including GPS tracking, secure locking mechanisms, and real-time monitoring.

Whether you need to transport legal documents, financial records, or high-value items, our courier service provides you with peace of mind knowing that your items are in the hands of trusted and reliable security professionals.`,
    category: "courier",
    thumbnail: courier,
    img_urls: [
      "https://images.unsplash.com/photo-1612630741022-b29ec17d013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291cmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1543499459-d1460946bdc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cmllcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "Investigations",
    shortDescription:
      "Some of our services are: Fraud, Internal Theft Investigations, Investigations, Burglary and/or Robbery Investigation, Surveillance, Missing Persons Investigations, Child Custody Investigations and Domestic Relationships Investigations.",
    longDescription: `Fortress Security's investigation services are designed to help individuals, businesses, and organizations uncover vital information and evidence related to a wide range of security concerns. Our team of highly trained and experienced investigators uses the latest technology and techniques to gather and analyze data, conduct interviews, and uncover facts that can be critical to your safety and security.

Whether you need assistance with a complex investigation related to fraud, theft, or other criminal activity, or you simply need help gathering information related to a sensitive personal or professional matter, our team is here to help. We take a comprehensive approach to investigations, working closely with you to understand your needs and concerns, and tailoring our services to meet your specific requirements.

At Fortress Security, we understand that every situation is unique, and we pride ourselves on our ability to provide customized investigation services that are tailored to the individual needs of our clients. Whether you require discreet surveillance, in-depth research and analysis, or expert witness testimony, we have the expertise and resources to get the job done. Contact us today to learn more about how our investigation services can help you achieve your security goals.`,
    category: "other",
    thumbnail: investigation,
    img_urls: [
      "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0aWdhdGlvbiUyMHRoZWZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGludmVzdGlnYXRpb24lMjB0aGVmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "Special Event Security",
    shortDescription:
      "We provide security for different sized events and ensure that all events are well monitored while maintaining a high level of professionalism.",
    longDescription: `Special Event Security is a service offered by Fortress Security, a professional security company. Our expert security personnel are specially trained to provide top-notch security coverage for events of all types and sizes. We understand that events can present unique security challenges, and that's why we customize our security plans to meet the specific needs of each event we cover.

Our team of security professionals is equipped to handle everything from crowd control to emergency response. We work closely with event organizers to assess the risks and vulnerabilities of the event, and we develop a comprehensive security plan that ensures the safety of all attendees and staff.

At Fortress Security, we understand that every event is different, and that's why we offer customizable security solutions that meet the unique needs of each event. Whether you're planning a large-scale music festival or a small corporate gathering, our experienced security team will provide the protection you need to ensure a safe and secure event. We take pride in our commitment to excellence, and we're dedicated to providing the highest level of security services to all of our clients.`,
    category: "other",
    thumbnail: event,
    img_urls: [
      "https://images.unsplash.com/photo-1659273144088-202efb9b86c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHklMjBzZWN1cml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5JTIwc2VjdXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    ],
  },
  {
    title: "GPS Services",
    shortDescription:
      "We provide a range of GPS services including Real Time Monitoring & Historical Data, Geofence & Routing Tools, Comprehensive Reporting, Alerts and notifications.",
    longDescription: `GPS services are an essential component of modern security solutions. At Fortress Security, we understand the importance of having real-time information about the location of your valuable assets, vehicles, or personnel. Our GPS services provide you with an accurate and reliable way to track your assets and ensure their safety and security.

Our GPS tracking solutions are designed to give you a comprehensive view of your assets, with the ability to track their location, speed, and direction of travel. Our systems are easy to use and come with a user-friendly interface that allows you to monitor your assets in real-time. You can access our GPS services via a web portal or a mobile app, giving you the flexibility to keep tabs on your assets from anywhere, at any time.

Our GPS services are suitable for a range of industries, including logistics, transportation, construction, and healthcare. We provide customized GPS solutions tailored to your specific needs, ensuring that you have the right tools to keep your assets safe and secure. Whether you need to track a single vehicle or manage a fleet of vehicles, our GPS services can help you optimize your operations, improve efficiency, and reduce costs.

At Fortress Security, we prioritize the security and privacy of your data. Our GPS systems are designed to comply with industry standards, and we employ robust security protocols to protect your data from unauthorized access. With our GPS services, you can rest assured that your assets are in safe hands.`,
    category: "monitoring",
    thumbnail: gps,
    img_urls: [
      "https://images.unsplash.com/photo-1603638725135-928baf863eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1618861859575-b6e43d10922a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ],
  },
];

export default servicesList;
