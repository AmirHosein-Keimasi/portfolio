"use client";

import dynamic from "next/dynamic";
import { projects } from "@/lib/constants/dev-skills";
import { useApp } from "@/lib/context/app-context";
import Image from "next/image";

// Dynamic import برای react-slick
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  ),
});

export function CommentSlider() {
  const { mode } = useApp();
  const textColor =
    mode === "dark" ? "text-dark-text-main" : "text-light-text-main";
  const textSecondary = mode === "dark" ? "text-gray-400" : "text-gray-600";
  const buttonColor =
    mode === "dark"
      ? "bg-dark-success hover:bg-dark-success/90"
      : "bg-light-success hover:bg-light-success/90";

  const options = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    lazyLoad: "ondemand" as const,
  };

  return (
    <div>
      <Slider {...options}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col text-center md:text-right p-4 md:p-15">
              {/* Header Section */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4 relative inline-block">
                {project.websiteLink ? (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-inherit relative hover:after:w-full after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-500 after:transition-all after:duration-300 after:absolute after:bottom-[-2px] after:left-0"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span>{project.title}</span>
                )}
              </h2>

              {/* Content Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {project.imgSrc && (
                  <div className="col-span-12 md:col-span-6">
                    <Image
                      src={project.imgSrc}
                      alt={`${project.title} - Devices Showcase`}
                      width={700}
                      height={400}
                      className="w-full max-w-[700px] mx-auto"
                      loading="lazy"
                    />
                  </div>
                )}
                <div
                  className={`col-span-12 ${project.imgSrc ? "md:col-span-6" : "md:col-span-12"}`}
                >
                  <p
                    className={`leading-relaxed ${textSecondary} mb-2 text-center md:text-right`}
                  >
                    {project.description}
                  </p>
                  <p
                    className={`leading-relaxed ${textSecondary} text-center md:text-right`}
                  >
                    تکنولوژی‌ها:
                  </p>
                  <p
                    className={`leading-relaxed ${textSecondary} text-center md:text-right`}
                  >
                    {project.technologies}
                  </p>
                  <p
                    className={`leading-relaxed ${textSecondary} text-center md:text-right`}
                  >
                    ویژگی‌ها:
                  </p>
                  <p
                    className={`leading-relaxed ${textSecondary} text-center md:text-right`}
                  >
                    {project.features}
                  </p>
                  {/* Buttons Section */}
                  <div className="mt-4 flex justify-center md:justify-end gap-2 flex-wrap">
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          ${buttonColor}
                          text-white font-medium py-2 px-6 rounded-full
                          text-sm md:text-base
                          transition-colors duration-200
                          no-underline
                        `}
                      >
                        مشاهده وبسایت
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        ${buttonColor}
                        text-white font-medium py-2 px-6 rounded-full
                        text-sm md:text-base
                        transition-colors duration-200
                        no-underline
                      `}
                    >
                      مشاهده کد
                    </a>
                  </div>
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex justify-center md:justify-end mt-2 gap-2 flex-wrap">
                {project.icons.map((icon, idx) => (
                  <Image
                    key={idx}
                    src={icon}
                    alt={`${project.title} - Technology Icon ${idx + 1}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
