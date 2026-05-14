import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
          <div className="bg-background rounded-lg shadow-sm border border-border overflow-hidden">
            <iframe 
              src="https://docs.google.com/document/d/e/2PACX-1vQssKRFm3KQ9F0W95sgBcpiioPMVNdXCwMbL4ewDPCnDVaMHpvqSyjtoUVlUumq_8psj6wZs6SUNFCy/pub?embedded=true"
              width="100%"
              height="1200"
              style={{ border: 'none' }}
              title="Privacy Policy"
              className="w-full min-h-[800px] md:min-h-[1200px]"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
