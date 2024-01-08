import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://summailize.com/
// - Name: Summailize
// - Description: An Unread Email Summarizer for gmail
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: email
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://summailize.com/privacy-policy
// - Governing Law: India
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service for Summailize

Date: January 9, 2024

1. Introduction
Welcome to Summailize (https://summailize.com/). These Terms of Service ("Terms") govern your use of the Summailize website and its Unread Email Summarizer for Gmail. By accessing or using our service, you agree to be bound by these Terms.

2. User Data Collection
We collect personal data such as your email address to provide our services. For more details on how we handle your personal data, please refer to our Privacy Policy (https://summailize.com/privacy-policy).

3. Non-Personal Data Collection
We use web cookies to enhance user experience and analyze website performance. These cookies do not collect personal information.

4. Use of Service
You agree to use Summailize solely for your personal, non-commercial use. Misuse or unauthorized use of the service is strictly prohibited.

5. Intellectual Property Rights
All content on Summailize, including the design, text, graphics, and the selection and arrangement thereof, is the sole property of Summailize or its licensors.

6. Disclaimer of Warranties
Summailize is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy or reliability of the service.

7. Limitation of Liability
Summailize will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.

8. Governing Law
These Terms are governed by the laws of India. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of India.

9. Changes to Terms
Summailize reserves the right to modify these Terms at any time. Users will be notified of any changes via email.

10. Contact Us
If you have any questions about these Terms, please contact us at [insert contact information].

By using Summailize, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
