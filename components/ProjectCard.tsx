import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from './ui/badge';

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badges: string[];
};

const ProjectCard = ({ href, imageSrc, imageAlt, title, description, badges }: ProjectCardProps) => {
  return (
    <Link href={href} target="_blank">
      <Card className="flex min-h-72 flex-col items-center md:flex-row">
        <CardHeader className="w-full">
          <Image
            src={imageSrc}
            height={667}
            width={1186}
            alt={imageAlt}
            className="aspect-video rounded-xl object-cover object-center"
          />
        </CardHeader>
        <CardContent className="flex w-full flex-col justify-between gap-2 py-4">
          <div>
            <h4 className="text-2xl font-semibold">
              {title}
            </h4>
            <p className="">
              {description}
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} className={`${index % 2 === 0 ? "border border-primary bg-white text-black dark:bg-black dark:text-white": "bg-primary"}`}>{badge}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
