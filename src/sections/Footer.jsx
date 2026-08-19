import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-8 text-sm text-neutral-400 c-space mt-20">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Girijesh Paliwal</p>
        <p>·</p>
        <p>Senior Mobile App Developer</p>
      </div>
      <div className="flex gap-4 items-center">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="p-2 transition rounded-full bg-white/5 hover:bg-white/15 hover-animation"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2026 Girijesh Paliwal. All rights reserved.</p>
    </section>
  );
};

export default Footer;
