"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Linkedin, Mail, MessageCircle, Settings, TrendingUp, Twitter, Users, Zap } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-tech","url":"https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up shot of a person coding on a laptop, focusing on the hands and screen."},
  {"id":"about-team","url":"https://images.pexels.com/photos/6804084/pexels-photo-6804084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of professionals discussing a project at a computer in a modern office environment."},
  {"id":"cloud-infrastructure","url":"https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a modern server unit in a blue-lit data center environment."},
  {"id":"cybersecurity","url":"https://images.pexels.com/photos/5475786/pexels-photo-5475786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A tech-savvy individual using a laptop in a neon-lit room, symbolizing cybersecurity."},
  {"id":"web-development","url":"https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of young programmer working on multiple laptops in a modern office setting."},
  {"id":"team-member-1","url":"https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Portrait of a confident businesswoman standing with arms crossed in modern office space."},
  {"id":"team-member-2","url":"https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"An adult man focused on remote work using a laptop in a stylish bedroom office."},
  {"id":"team-member-3","url":"https://images.pexels.com/photos/5421777/pexels-photo-5421777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling soldier in uniform inside a military vehicle cockpit on a sunny day."},
  {"id":"team-member-4","url":"https://images.pexels.com/photos/8171180/pexels-photo-8171180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A smiling businesswoman stands confidently in a modern office environment."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young businesswoman using smartphone indoors with confident expression. Modern and professional setting."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/6775117/pexels-photo-6775117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Diverse group of five adults standing indoors with a yellow bicycle, celebrating success."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in suit shaking hands at office desk, symbolizing successful partnership."},
  {"id":"testimonial-5","url":"https://images.pexels.com/photos/7691739/pexels-photo-7691739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Professional businessman in a suit making a phone call in a modern office setting."},
  {"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"apple-logo","url":"https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant Apple logo design featuring rainbow colors on a white background."},
  {"id":"ibm-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"oracle-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"salesforce-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"contact-office","url":"https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Contemporary office reception area with vibrant seating and professional ambiance."}
];

export default function Home() {
  const _heroTech = assetMap.find(a => a.id === "hero-tech");
  const heroTechUrl = _heroTech?.url ?? "/public/images/placeholder.webp";
  const heroTechAlt = _heroTech?.alt ?? "Modern IT office with technology workspace";

  const _cloudInfrastructure = assetMap.find(a => a.id === "cloud-infrastructure");
  const cloudInfrastructureUrl = _cloudInfrastructure?.url ?? "/public/images/placeholder.webp";
  const cloudInfrastructureAlt = _cloudInfrastructure?.alt ?? "Cloud computing infrastructure";

  const _cybersecurity = assetMap.find(a => a.id === "cybersecurity");
  const cybersecurityUrl = _cybersecurity?.url ?? "/public/images/placeholder.webp";
  const cybersecurityAlt = _cybersecurity?.alt ?? "Cybersecurity protection shield";

  const _webDevelopment = assetMap.find(a => a.id === "web-development");
  const webDevelopmentUrl = _webDevelopment?.url ?? "/public/images/placeholder.webp";
  const webDevelopmentAlt = _webDevelopment?.alt ?? "Software development coding";

  const _teamMember1 = assetMap.find(a => a.id === "team-member-1");
  const teamMember1Url = _teamMember1?.url ?? "/public/images/placeholder.webp";
  const teamMember1Alt = _teamMember1?.alt ?? "Portrait of Michael Chen";

  const _teamMember2 = assetMap.find(a => a.id === "team-member-2");
  const teamMember2Url = _teamMember2?.url ?? "/public/images/placeholder.webp";
  const teamMember2Alt = _teamMember2?.alt ?? "Portrait of Sarah Rodriguez";

  const _teamMember3 = assetMap.find(a => a.id === "team-member-3");
  const teamMember3Url = _teamMember3?.url ?? "/public/images/placeholder.webp";
  const teamMember3Alt = _teamMember3?.alt ?? "Portrait of David Park";

  const _teamMember4 = assetMap.find(a => a.id === "team-member-4");
  const teamMember4Url = _teamMember4?.url ?? "/public/images/placeholder.webp";
  const teamMember4Alt = _teamMember4?.alt ?? "Portrait of Emily Watson";

  const _testimonial1 = assetMap.find(a => a.id === "testimonial-1");
  const testimonial1Url = _testimonial1?.url ?? "/public/images/placeholder.webp";
  const testimonial1Alt = _testimonial1?.alt ?? "Portrait of James Thompson";

  const _testimonial2 = assetMap.find(a => a.id === "testimonial-2");
  const testimonial2Url = _testimonial2?.url ?? "/public/images/placeholder.webp";
  const testimonial2Alt = _testimonial2?.alt ?? "Portrait of Lisa Martinez";

  const _testimonial3 = assetMap.find(a => a.id === "testimonial-3");
  const testimonial3Url = _testimonial3?.url ?? "/public/images/placeholder.webp";
  const testimonial3Alt = _testimonial3?.alt ?? "Portrait of Robert Kim";

  const _testimonial4 = assetMap.find(a => a.id === "testimonial-4");
  const testimonial4Url = _testimonial4?.url ?? "/public/images/placeholder.webp";
  const testimonial4Alt = _testimonial4?.alt ?? "Portrait of Anna Petrov";

  const _testimonial5 = assetMap.find(a => a.id === "testimonial-5");
  const testimonial5Url = _testimonial5?.url ?? "/public/images/placeholder.webp";
  const testimonial5Alt = _testimonial5?.alt ?? "Portrait of Mark Johnson";

  const _microsoftLogo = assetMap.find(a => a.id === "microsoft-logo");
  const microsoftLogoUrl = _microsoftLogo?.url ?? "/public/images/placeholder.webp";

  const _googleLogo = assetMap.find(a => a.id === "google-logo");
  const googleLogoUrl = _googleLogo?.url ?? "/public/images/placeholder.webp";

  const _amazonLogo = assetMap.find(a => a.id === "amazon-logo");
  const amazonLogoUrl = _amazonLogo?.url ?? "/public/images/placeholder.webp";

  const _appleLogo = assetMap.find(a => a.id === "apple-logo");
  const appleLogoUrl = _appleLogo?.url ?? "/public/images/placeholder.webp";

  const _ibmLogo = assetMap.find(a => a.id === "ibm-logo");
  const ibmLogoUrl = _ibmLogo?.url ?? "/public/images/placeholder.webp";

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechSolutions"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Empowering Your Digital Future"
          description="Transform your business with cutting-edge IT solutions, expert consulting, and innovative technology services that drive growth and efficiency."
          tag="IT Excellence"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Our Services", href: "feature" }
          ]}
          imageSrc={heroTechUrl}
          imageAlt={heroTechAlt}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About TechSolutions"
          description={[
            "We are a leading IT company dedicated to delivering innovative technology solutions that transform businesses and drive digital success.",
            "Our expert team combines deep technical knowledge with strategic thinking to help organizations navigate the complex digital landscape and achieve their goals."
          ]}
          buttons={[{ text: "Learn More", href: "team" }]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our IT Services"
          description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation"
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              id: "01",
              title: "Cloud Infrastructure",
              description: "Scalable cloud solutions with enterprise-grade security, automated deployment, and 99.9% uptime guarantee for your critical business applications.",
              imageSrc: cloudInfrastructureUrl,
              imageAlt: cloudInfrastructureAlt
            },
            {
              id: "02",
              title: "Cybersecurity Solutions",
              description: "Advanced threat protection, security audits, and compliance management to safeguard your digital assets and maintain customer trust.",
              imageSrc: cybersecurityUrl,
              imageAlt: cybersecurityAlt
            },
            {
              id: "03",
              title: "Custom Software Development",
              description: "Tailored web and mobile applications built with modern technologies to streamline operations and enhance user experiences.",
              imageSrc: webDevelopmentUrl,
              imageAlt: webDevelopmentAlt
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact"
          description="Proven results that demonstrate our commitment to excellence and client success"
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "500+",
              description: "Successful Projects Delivered"
            },
            {
              id: "2",
              value: "98%",
              description: "Client Satisfaction Rate"
            },
            {
              id: "3",
              value: "15+",
              description: "Years of Industry Experience"
            },
            {
              id: "4",
              value: "24/7",
              description: "Technical Support Available"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Experienced professionals dedicated to delivering exceptional IT solutions and outstanding client service"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Chief Technology Officer",
              description: "15+ years leading enterprise technology transformations. Former Senior Architect at Microsoft and IBM.",
              imageSrc: teamMember1Url,
              imageAlt: teamMember1Alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael-chen" },
                { icon: Twitter, url: "https://twitter.com/mchen_tech" }
              ]
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              role: "Lead Developer",
              description: "Full-stack development expert specializing in cloud-native applications and modern web technologies.",
              imageSrc: teamMember2Url,
              imageAlt: teamMember2Alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah-rodriguez" }
              ]
            },
            {
              id: "3",
              name: "David Park",
              role: "Cybersecurity Specialist",
              description: "Certified ethical hacker with expertise in threat detection, incident response, and security architecture.",
              imageSrc: teamMember3Url,
              imageAlt: teamMember3Alt,
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/david-park" }
              ]
            },
            {
              id: "4",
              name: "Emily Watson",
              role: "IT Consultant",
              description: "Strategic technology advisor helping businesses align IT investments with growth objectives.",
              imageSrc: teamMember4Url,
              imageAlt: teamMember4Alt,
              socialLinks: [
                { icon: Mail, url: "mailto:emily@techsolutions.com" },
                { icon: Linkedin, url: "https://linkedin.com/in/emily-watson" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from companies that have transformed their operations with our IT solutions"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "James Thompson",
              role: "CEO",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: testimonial1Url,
              imageAlt: testimonial1Alt
            },
            {
              id: "2",
              name: "Lisa Martinez",
              role: "CTO",
              company: "GrowthTech Solutions",
              rating: 5,
              imageSrc: testimonial2Url,
              imageAlt: testimonial2Alt
            },
            {
              id: "3",
              name: "Robert Kim",
              role: "IT Director",
              company: "Enterprise Systems Inc",
              rating: 5,
              imageSrc: testimonial3Url,
              imageAlt: testimonial3Alt
            },
            {
              id: "4",
              name: "Anna Petrov",
              role: "Operations Manager",
              company: "Digital Dynamics",
              rating: 5,
              imageSrc: testimonial4Url,
              imageAlt: testimonial4Alt
            },
            {
              id: "5",
              name: "Mark Johnson",
              role: "Technology Lead",
              company: "Future Systems",
              rating: 5,
              imageSrc: testimonial5Url,
              imageAlt: testimonial5Alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our technology solutions"
          tag="Partners"
          tagIcon={Award}
          logos={[
            microsoftLogoUrl,
            googleLogoUrl,
            amazonLogoUrl,
            appleLogoUrl,
            ibmLogoUrl
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our IT services and solutions"
          faqs={[
            {
              id: "1",
              title: "What IT services do you offer?",
              content: "We provide comprehensive IT services including cloud infrastructure, cybersecurity, custom software development, IT consulting, system integration, and 24/7 technical support."
            },
            {
              id: "2",
              title: "How do you ensure data security?",
              content: "We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, compliance management, and continuous monitoring to protect your data."
            },
            {
              id: "3",
              title: "Do you provide ongoing support?",
              content: "Yes, we offer 24/7 technical support, regular system maintenance, software updates, and dedicated account management to ensure your systems run smoothly."
            },
            {
              id: "4",
              title: "Can you integrate with existing systems?",
              content: "Absolutely. Our team specializes in system integration and can seamlessly connect new solutions with your existing infrastructure while minimizing disruption to operations."
            },
            {
              id: "5",
              title: "What is your project timeline?",
              content: "Project timelines vary based on complexity and scope. We provide detailed project plans with milestones and typically deliver solutions within 2-12 weeks depending on requirements."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our IT experts to discuss your technology needs and discover how we can help accelerate your digital transformation."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "phone", type: "tel