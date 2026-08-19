import { motion } from "motion/react";
import { assetPath } from "../constants";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm bg-black/60"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 transition rounded-full top-4 right-4 bg-midnight/80 hover:bg-neutral-700 text-white cursor-pointer"
          aria-label="Close dialog"
        >
          <img src={assetPath("assets/close.svg")} className="w-5 h-5" alt="Close" />
        </button>
        <img src={image} alt={title} className="w-full object-cover max-h-64 rounded-t-2xl" />
        <div className="p-6">
          <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-neutral-300 font-medium">{description}</p>
          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex items-start gap-2 text-xs md:text-sm text-neutral-400">
                <span className="text-lavender">▹</span>
                <span>{subDesc}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2 items-center">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-neutral-300"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-4 h-4 object-contain"
                  />
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition rounded-full bg-radial from-lavender to-royal hover:brightness-110 hover-animation"
              >
                <span>View Details</span>
                <img src={assetPath("assets/arrow-up.svg")} className="w-3.5 h-3.5" alt="" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
