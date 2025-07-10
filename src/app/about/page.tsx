import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 md:py-16">
      <section className="flex flex-col sm:flex-row items-center gap-8 mb-12">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/images/nw.jpg" alt="Noah's profile picture" data-ai-hint="professional headshot" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-muted-foreground">
            A little more about my journey and what drives me.
          </p>
        </div>
      </section>

      <section className="space-y-6 text-foreground/90">
        <p>
          Hello! I'm Noah, a lead software engineer with a deep passion for building products that not only work flawlessly but are also a joy to use. My journey in tech has been diverse, spanning from large corporations like Visa to agile startups like SourceDay. This has given me a unique perspective on how to build and scale technology in different environments.
        </p>
        <p>
          I specialize in frontend development with a strong focus on the React ecosystem. I thrive on architecting complex user interfaces, mentoring fellow engineers, and fostering a collaborative team culture. My experience isn't limited to the frontend; I'm comfortable working across the stack and have experience with Ruby on Rails, which allows me to effectively bridge the gap between UI and backend services.
        </p>
        <p>
          My recent career includes a pivot into tech sales, an experience that honed my communication and product strategy skills. It reinforced the importance of understanding customer needs and translating them into technical solutions, a perspective that makes me a more empathetic and effective engineering leader.
        </p>
        <p>
          When I'm not coding, I enjoy building AI Agents, reading Quantum Physics literature, and exploring new technologies.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="flex justify-center gap-6">
          <Link href="https://www.linkedin.com/in/noahwwatson/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-8 w-8" />
          </Link>
          <Link href="mailto:noah.w.watson@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-8 w-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
