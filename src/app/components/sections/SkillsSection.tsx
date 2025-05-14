import React from "react";
import SkillLogo from "@/components/SkillLogo";
import SectionHeader from "@/components/SectionHeader";

const SkillsSection: React.FC = () => {
  return (
    <section className="section bg-white relative py-[40px]">
      <SectionHeader className="mb-12" heading="My Tools" justify="center" />

      <div className="container grid grid-cols-2 lg:grid-cols-6 gap-8">
        <SkillLogo image="/images/logos/HTML5-badge.svg" heading="HTML5" />
        <SkillLogo image="/images/logos/CSS3-badge.svg" heading="CSS3" />
        <SkillLogo image="/images/logos/JS-badge-alt.svg" heading="JS" />
        <SkillLogo
          image="/images/logos/bootstrap-logo.svg"
          heading="Bootstrap"
        />
        <SkillLogo image="/images/logos/react-logo.svg" heading="React" />
        <SkillLogo image="/images/logos/nextjs-logo.svg" heading="NextJS" />
        <SkillLogo image="/images/logos/vuejs-logo.svg" heading="VueJS" />
        <SkillLogo
          image="/images/logos/HTML5-badge.svg"
          heading="Tailwind CSS"
        />
        <SkillLogo image="/images/logos/laravel-logo.svg" heading="Laravel" />
        <SkillLogo image="/images/logos/magento-logo.svg" heading="Magento" />
        <SkillLogo
          image="/images/logos/wordpress-logo.svg"
          heading="Wordpress"
        />
        <SkillLogo image="/images/logos/php-logo.svg" heading="PHP" />

        <SkillLogo image="/images/logos/figma-logo.svg" heading="Figma" />
        <SkillLogo image="/images/logos/docker-logo.svg" heading="Docker" />
        <SkillLogo image="/images/logos/graphQL-logo.svg" heading="GraphQL" />
        <SkillLogo
          image="/images/logos/salesforce-logo.svg"
          heading="Salesforce"
        />
        <SkillLogo image="/images/logos/webflow-logo.svg" heading="Webflow" />
        <SkillLogo
          image="/images/logos/woocommerce-logo.svg"
          heading="Woocommerce"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
