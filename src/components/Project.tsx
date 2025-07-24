import { useState } from "react";
import type { ProjectProps } from "../lib/props";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isVisible && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModal={() => setIsVisible(false)}
        />
      )}
    </>
  );
};

export default Project;
