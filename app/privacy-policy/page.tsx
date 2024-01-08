import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://summailize.com/
// - Name: Summailize
// - Description: An Unread Email Summarizer for gmail
// - User data collected: Email
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Waitlist
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Date: January 9, 2024

1. Introduction
This Privacy Policy applies to Summailize (https://summailize.com/), an Unread Email Summarizer for Gmail. By using our website, you consent to the data practices described in this policy.

2. Data Collection and Use
We collect the following information:

Email addresses of users for the purpose of creating a waitlist.
The primary purpose of collecting this data is to maintain a waitlist for our services.

3. Non-Personal Data Collection
We use web cookies to enhance user experience on our site. These cookies do not collect personal information.

4. Data Sharing
We do not share the data collected with any third parties.

5. Children's Privacy
Summailize does not knowingly collect, use, or disclose personal information from children under the age of 13.

6. Security of Your Personal Information
We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information.

7. Updates to This Privacy Policy
We may update this Privacy Policy to reflect company and customer feedback. Summailize will inform users of any changes by email.

8. Contact Information
Summailize welcomes your questions or comments regarding this Privacy Policy. Please contact us at [insert contact information].

By using Summailize, you consent to the data practices described in this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
