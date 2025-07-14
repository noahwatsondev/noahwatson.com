import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:py-16">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Noah Watson
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          <div>Tech Sales Professional</div>
          <div>Solutions Engineer</div>
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground">
          <div>Solutions Engineer with 8 years technical customer facing experience implementing Supply Chain technology solutions for Enterprise and Mid-market companies in the Manufacturing and Distribution sectors.</div>
          <div>Consulted (pre-sale), architected (post-sale), and continuously supported full SaaS integrations lifecycles for annual contracts ranging between $100,000 and $2 million, in collaboration with client team sizes from 2 to 50 people.</div>
          <div>Core competencies include technical solution design, value-driven discovery, strong communication and persuasive technical storytelling, proof of concept (PoC) development, integration architecture, extensive cross-functional collaboration, and strategic sales cycle navigation.</div>
        </p>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-12">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Solutions Engineer / Lead UI Engineer / Product Manager | <Link href="https://sourceday.com" target="_blank" rel="noopener noreferrer">SourceDay</Link>
              </CardTitle>
              <CardDescription>Modernizing a supply chain</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Image
                src="/images/featured/sourceday.jpg"
                alt="SourceDay application screenshot"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="dashboard interface"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">Problem & Challenge</h3>
                <p className="text-muted-foreground mb-4">
                  The goal was to transform a legacy platform into a modern, scalable, and user-friendly supply chain management solution. This involved leading the UI development for major new features, improving performance, and ensuring a consistent and intuitive user experience across the application.
                </p>
                <h3 className="font-semibold text-lg mb-2">My Contributions & Leadership</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Led the architecture and development of critical React features, guiding a team of engineers to deliver high-quality, maintainable code.</li>
                  <li>Drove UI/UX improvements by collaborating with product and design teams, resulting in increased user satisfaction and reduced support tickets.</li>
                  <li>Championed performance optimization efforts, improving application load times by over 30%.</li>
                  <li>Influenced Ruby on Rails API design from the frontend perspective to ensure efficient data flow and better user interactions.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Ruby on Rails</Badge>
              <Badge variant="secondary">UI/UX Design</Badge>
              <Badge variant="secondary">Team Leadership</Badge>
            </CardFooter>
          </Card>

          {/* <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">React/UI Focused Project</CardTitle>
              <CardDescription>A project demonstrating clean code and responsive design.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
               <Image
                src="https://placehold.co/1200x600.png"
                alt="Project screenshot"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="website design"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">Problem & Challenge</h3>
                <p className="text-muted-foreground mb-4">
                  Briefly describe the challenge this project addressed. For example, building a complex data visualization dashboard or a user workflow application.
                </p>
                <h3 className="font-semibold text-lg mb-2">My Contributions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Implemented a responsive and accessible UI using modern React principles.</li>
                  <li>Designed and built reusable components to ensure consistency and speed up development.</li>
                  <li>Integrated with a backend API to manage and display dynamic data.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Figma</Badge>
            </CardFooter>
          </Card> */}

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Sr. UI Engineer | <Link href="https://visa.com" target="_blank" rel="noopener noreferrer">Visa</Link>
              </CardTitle>
              <CardDescription>Developed interactive data visualizations for Cybersource.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
               <Image
                src="/images/featured/visa.png"
                alt="Visa Cybersource dashboard"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="financial dashboard"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">My Contributions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed interactive data visualizations using React for Cybersource, Visa’s global payment gateway.</li>
                  <li>Worked closely with backend teams to display real-time financial data across web interfaces.</li>
                  <li>Contributed to V.me, Visa’s early digital wallet product, building reusable Ruby on Rails components and secure user workflows.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Ruby on Rails</Badge>
              <Badge variant="secondary">Data Visualization</Badge>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Sr. UI Engineer | <Link href="https://www.linkedin.com/company/leafgroup/" target="_blank" rel="noopener noreferrer">Leaf Group</Link>
              </CardTitle>
              <CardDescription>Created React-based templates and custom ad layouts for high-traffic platforms including USA Today, SF Gate, Livestrong, and eHow.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
               <Image
                src="/images/featured/leafgroup.png"
                alt="Leaf Group project screenshot"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="ad tech"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">My Contributions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Ran A/B tests and multivariate experiments with Google Optimize to improve engagement and click-through rates.</li>
                  <li>Optimized ad delivery through custom JavaScript and real-time Google Ads variants.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">A/B Testing</Badge>
              <Badge variant="secondary">Google Optimize</Badge>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Senior Software Engineer | <Link href="https://retailmenot.com" target="_blank" rel="noopener noreferrer">RetailMeNot</Link>
              </CardTitle>
              <CardDescription>Enhanced user experience for a leading deals and savings platform.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
               <Image
                src="/images/featured/retailmenot.png"
                alt="RetailMeNot application screenshot"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="mobile app deals"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">Problem & Challenge</h3>
                <p className="text-muted-foreground mb-4">
                  On a platform serving millions of users daily, the challenge was to continuously innovate and improve the user experience while maintaining high performance and reliability. This involved refactoring legacy code and building new features for a highly competitive consumer market.
                </p>
                <h3 className="font-semibold text-lg mb-2">My Contributions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed and maintained key user-facing features using JavaScript and modern frontend frameworks.</li>
                  <li>Participated in A/B testing initiatives to optimize user engagement and conversion rates.</li>
                  <li>Collaborated with cross-functional teams to ship features on a regular cadence in a fast-paced agile environment.</li>
                  <li>Worked on performance tuning to ensure fast page loads for a massive user base.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">PHP</Badge>
              <Badge variant="secondary">A/B Testing</Badge>
              <Badge variant="secondary">Performance Optimization</Badge>
              <Badge variant="secondary">Agile</Badge>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                Affiliate Marketing Platform | <Link href="https://offerbae.com" target="_blank" rel="noopener noreferrer">OfferBae</Link>
              </CardTitle>
              <CardDescription>A mobile-first affiliate site inspired by RetailMeNot, built with Next.js and Rakuten APIs.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
               <Image
                src="/images/featured/offerbae.png"
                alt="OfferBae.com mobile and desktop views"
                width={1200}
                height={600}
                className="rounded-lg border"
                data-ai-hint="ecommerce website"
              />
              <div>
                <h3 className="font-semibold text-lg mb-2">Problem & Challenge</h3>
                <p className="text-muted-foreground mb-4">
                  The goal was to create a performant, mobile-first platform that aggregates affiliate offers from the Rakuten network, providing users with a seamless experience to discover deals and drive sales for partner advertisers.
                </p>
                <h3 className="font-semibold text-lg mb-2">My Contributions</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Architected and developed the entire frontend using Next.js for server-side rendering and a fast user experience.</li>
                  <li>Integrated with Rakuten's affiliate APIs to fetch and display dynamic offer content.</li>
                  <li>Designed and implemented a mobile-first, responsive UI to maximize user engagement on all devices.</li>
                  <li>Focused on SEO and performance optimization to attract organic traffic and ensure quick load times.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Rakuten API</Badge>
            </CardFooter>
          </Card>

        </div>
      </section>
    </div>
  );
}
