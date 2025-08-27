import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const TermsAndConditions = () => {
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
              Terms and Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-gray-700">
                Welcome to our mobile application and related services (the
                "Service") operated by Appuxs LLC ("we," "our," or "us"). By
                downloading, installing, accessing, or using our Service, you
                agree to be bound by these Terms and Conditions ("Terms"). If
                you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                2. Description of Service
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our Service provides mobile application functionality and
                features as described within the app. We reserve the right to
                modify, suspend, or discontinue any aspect of the Service at any
                time without prior notice.
              </p>
              <p className="leading-relaxed text-gray-700">
                The Service may include features such as user accounts, content
                sharing, in-app purchases, push notifications, and integration
                with third-party services. Specific features may vary depending
                on the application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                3. User Accounts
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                To access certain features of our Service, you may be required
                to create an account. You agree to:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  Provide accurate, current, and complete information during
                  registration
                </li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                4. Acceptable Use
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                You agree to use our Service only for lawful purposes and in
                accordance with these Terms. You agree NOT to:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  Violate any applicable laws, regulations, or third-party
                  rights
                </li>
                <li>
                  Upload, post, or transmit harmful, offensive, or inappropriate
                  content
                </li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Service
                </li>
                <li>
                  Use the Service for commercial purposes without our consent
                </li>
                <li>
                  Reverse engineer, modify, or create derivative works of the
                  Service
                </li>
                <li>
                  Use automated systems to access the Service without permission
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                5. User-Generated Content
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our Service may allow you to submit, upload, or share content.
                You retain ownership of your content, but by using our Service,
                you grant us a non-exclusive, royalty-free, worldwide license to
                use, display, and distribute your content within the Service.
              </p>
              <p className="leading-relaxed text-gray-700">
                You represent that you have all necessary rights to the content
                you submit and that your content does not violate any
                third-party rights or applicable laws. We reserve the right to
                remove any content that violates these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                6. Intellectual Property Rights
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                The Service and its original content, features, and
                functionality are owned by Appuxs LLC and are protected by
                copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
              <p className="leading-relaxed text-gray-700">
                You may not use our trademarks, logos, or proprietary
                information without our express written consent. Any
                unauthorized use may result in termination of your access to the
                Service and legal action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                7. In-App Purchases and Payments
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our Service may offer paid features, subscriptions, or virtual
                goods. Payment processing is handled by third-party payment
                processors (Apple App Store, Google Play Store, etc.).
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  All purchases are final and non-refundable unless required by
                  law
                </li>
                <li>Prices may change at any time without notice</li>
                <li>Subscriptions will auto-renew unless cancelled</li>
                <li>
                  You are responsible for managing your subscriptions through
                  your device settings
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                8. Privacy
              </h2>
              <p className="leading-relaxed text-gray-700">
                Your privacy is important to us. Please review our Privacy
                Policy, which explains how we collect, use, and protect your
                information when you use our Service. By using our Service, you
                agree to the collection and use of information in accordance
                with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                9. Disclaimers
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE
                FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
                INCLUDING:
              </p>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>
                  Merchantability, fitness for a particular purpose, and
                  non-infringement
                </li>
                <li>
                  That the Service will be error-free, secure, or uninterrupted
                </li>
                <li>That any defects will be corrected</li>
                <li>
                  The accuracy, reliability, or completeness of any content
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-gray-700">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, APPUXS LLC SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE,
                ARISING OUT OF YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                11. Indemnification
              </h2>
              <p className="leading-relaxed text-gray-700">
                You agree to indemnify, defend, and hold harmless Appuxs LLC and
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising out of your use of the
                Service, violation of these Terms, or infringement of any
                third-party rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                12. Termination
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice, for any reason,
                including breach of these Terms.
              </p>
              <p className="leading-relaxed text-gray-700">
                Upon termination, your right to use the Service will cease
                immediately, and any data associated with your account may be
                deleted. Provisions that should survive termination will remain
                in effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                13. Governing Law and Disputes
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your State/Country], without regard to
                conflict of law principles.
              </p>
              <p className="leading-relaxed text-gray-700">
                Any disputes arising out of or relating to these Terms or the
                Service shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration
                Association, except where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                14. Changes to Terms
              </h2>
              <p className="leading-relaxed text-gray-700">
                We reserve the right to modify these Terms at any time. We will
                provide notice of any material changes by posting the updated
                Terms in the app and updating the "Last updated" date. Your
                continued use of the Service after changes become effective
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                15. Severability
              </h2>
              <p className="leading-relaxed text-gray-700">
                If any provision of these Terms is found to be unenforceable or
                invalid, the remaining provisions will remain in full force and
                effect, and the unenforceable provision will be replaced with an
                enforceable provision that most closely reflects the original
                intent.
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

export default TermsAndConditions;
