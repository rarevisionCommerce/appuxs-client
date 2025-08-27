import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="pb-8 bg-dark">
        <Header />
      </div>
      <div className="min-h-screen px-4 py-8 bg-dark sm:px-6 lg:px-8">
        <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Appuxs LLC</p>
            <p className="mt-2 text-sm text-gray-500">
              Last updated: 8/20/2025
            </p>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed text-gray-700">
                Appuxs LLC ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile
                applications and related services (collectively, the "Service").
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access or
                use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Personal Information
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                We may collect personal information that you provide to us,
                including but not limited to:
              </p>
              <ul className="mb-4 space-y-1 text-gray-700 list-disc list-inside">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>
                  Payment information (processed by third-party payment
                  processors)
                </li>
                <li>User-generated content and communications</li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Device and Usage Information
              </h3>
              <p className="mb-4 leading-relaxed text-gray-700">
                We automatically collect certain information about your device
                and how you use our Service:
              </p>
              <ul className="mb-4 space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  Device identifiers, operating system, and hardware information
                </li>
                <li>IP address, browser type, and internet service provider</li>
                <li>App usage data, features used, and interaction patterns</li>
                <li>Location data (with your permission)</li>
                <li>Crash reports and performance data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We use the collected information for various purposes,
                including:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>Providing, maintaining, and improving our Service</li>
                <li>Processing transactions and sending related information</li>
                <li>
                  Sending technical notices, updates, and support messages
                </li>
                <li>
                  Responding to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  Personalizing your experience and delivering relevant content
                </li>
                <li>Monitoring and analyzing usage patterns and trends</li>
                <li>
                  Detecting, preventing, and addressing technical issues and
                  security threats
                </li>
                <li>
                  Complying with legal obligations and protecting our rights
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We may share your information in the following situations:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  <strong>Service Providers:</strong> With third-party service
                  providers who perform services on our behalf
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with
                  mergers, acquisitions, or asset sales
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent for
                  specific purposes
                </li>
                <li>
                  <strong>Aggregated Data:</strong> Anonymized, aggregated data
                  that cannot identify you personally
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. Data Security
              </h2>
              <p className="leading-relaxed text-gray-700">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Your Rights and Choices
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>Access, update, or delete your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability and the right to withdraw consent</li>
                <li>Opt-out of marketing communications</li>
                <li>
                  Disable location services and push notifications through
                  device settings
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. Children's Privacy
              </h2>
              <p className="leading-relaxed text-gray-700">
                Our Service is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If we discover that we have collected information from
                a child under 13, we will delete such information immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. International Data Transfers
              </h2>
              <p className="leading-relaxed text-gray-700">
                Your information may be transferred to and processed in
                countries other than your own. We ensure that such transfers
                comply with applicable data protection laws and implement
                appropriate safeguards to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. Your continued
                use of the Service after such changes constitutes acceptance of
                the updated Privacy Policy.
              </p>
            </section>

            
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
