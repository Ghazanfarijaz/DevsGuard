"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "@/lib/constants";

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Background Gradient Card - positioned behind image */}
                <div
                  className={`absolute left-0 right-0 h-[367px] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${project.bgGradient}`}
                  style={{ top: index === 0 ? "55px" : "55px" }}
                />

                {/* Content Container */}
                <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Image Card - positioned above gradient */}
                  <div className="relative w-full lg:w-[472px] h-[400px] lg:h-[478px] rounded-[50px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#88adcf] flex-shrink-0 z-10">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-[#d9d9d9]" />
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 472px"
                      />
                    </div>
                  </div>

                  {/* Text Content - positioned to align with gradient card */}
                  <div
                    className="flex-1 text-white lg:pt-[86px] flex flex-col"
                    style={{ maxHeight: "367px" }}
                  >
                    <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[32px] mb-6 leading-normal flex-shrink-0">
                      {project.title}
                    </h2>
                    <div className="relative flex-1 mb-8 max-w-[621px]">
                      <p
                        className="font-inter font-medium text-base sm:text-lg lg:text-[16.744px] leading-[31.395px] line-clamp-4"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.description.split("\n").map((line, i, arr) => (
                          <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                    <button
                      onClick={() => handleLearnMore(project)}
                      className="inline-flex items-center justify-center bg-white border border-[#0e4366] text-[#0c456b] text-[16px] font-extrabold font-inter px-9 py-5 rounded-[25px] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] hover:bg-gray-50 transition-colors cursor-pointer flex-shrink-0 self-start"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
