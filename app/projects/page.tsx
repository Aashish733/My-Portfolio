import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A showcase of my recent work and engineering projects.
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 card-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative w-full overflow-hidden transition-all duration-300 cursor-pointer group hover:scale-[1.03] hover:shadow-lg border border-border bg-card/60 backdrop-blur-md flex flex-col h-full"
          >
            {project.thumbnail && (
              <div className="relative w-full h-48 overflow-hidden border-b border-border">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
              </div>
            )}
            <CardHeader className="flex-1 flex flex-col justify-between p-5">
              <div>
                <CardTitle className="leading-6 text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {project.tagline}
                </p>
              </div>
              <CardDescription className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold px-2.5 py-1 bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
                >
                  Learn More
                  <span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="About"
        nextTitle="Skills & Tools"
      />
    </>
  );
};
export default ProjectsPage;
