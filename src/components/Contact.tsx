import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-left-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#f-drinks-img",
        {
          xPercent: 100,
          opacity: 0,
          duration: 1,
        },
        0.5,
      );
  }, []);

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <address className="not-italic">
            <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
          </address>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <a href="tel:5559876543">(555) 987-6543</a>
          </p>
          <p>
            <a href="mailto:hello@jsmcocktail.com">hello@jsmcocktail.com</a>
          </p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/footer-drinks.png"
        alt="footer-drinks"
        className="drink-img"
        id="f-drinks-img"
      />
    </footer>
  );
};

export default Contact;
