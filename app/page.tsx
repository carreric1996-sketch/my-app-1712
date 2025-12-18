import React from 'react'
import { Button } from '@/components/ui/button';
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import Cta from '@/components/CTA';

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="12"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"

        />
        <CompanionCard 
          id="34"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Math"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard 
          id="56"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className='home-section'>
        <CompanionsList />
        <Cta />
      </section>
    </div>
  )
}

export default Page