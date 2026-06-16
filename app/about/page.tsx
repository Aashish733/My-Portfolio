import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Aashish</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—here's who I am.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a Full-Stack Software Engineer who enjoys building scalable, production-ready applications from idea to deployment. My primary expertise lies in Next.js, React, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL, and I continuously expand my knowledge in Docker, Redis, AWS, CI/CD, and system design.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Over the past few years, I have worked on projects including AI-powered applications, e-commerce platforms, job portals, and management systems, giving me experience across both frontend and backend development.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I enjoy learning new technologies, collaborating with teams, and taking on challenging problems that push me to become a better engineer. My goal is to contribute to impactful products while continuously growing as a software developer.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
