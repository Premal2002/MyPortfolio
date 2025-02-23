"use client";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-4 rounded-lg">
            <Image src={project.image} alt={project.title} width={400} height={250} />
            <h2 className="text-2xl mt-3">{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.link} className="text-blue-400 mt-2 block">
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
