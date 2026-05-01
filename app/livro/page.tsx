import HeroSection from "@/components/livro/HeroSection";
import AboutBookSection from "@/components/livro/AboutBookSection";
import QuoteBreak from "@/components/livro/QuoteBreak";
import ChaptersSection from "@/components/livro/ChaptersSection";
import AboutAuthorSection from "@/components/livro/AboutAuthorSection";
import TestimonialSection from "@/components/livro/TestimonialSection";
import CTASection from "@/components/livro/CTASection";
import LivroFooter from "@/components/livro/LivroFooter";

export default function LivroPage() {
  return (
    <main>
      <HeroSection />
      <AboutBookSection />
      <QuoteBreak variant="A" />
      <ChaptersSection />
      <AboutAuthorSection />
      <QuoteBreak variant="B" />
      <TestimonialSection />
      <CTASection />
      <LivroFooter />
    </main>
  );
}
