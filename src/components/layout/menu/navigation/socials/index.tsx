import React from "react";
import {
  faDev,
  faDiscord,
  faGithub,
  faLinkedin,
} from "@awesome.me/kit-a7b37e0159/icons/classic/brands";
import { faEnvelope } from "@awesome.me/kit-a7b37e0159/icons/classic/light";
import { faLeetcode } from "@awesome.me/kit-a7b37e0159/icons/kit/custom";
import { Tooltip } from "react-tooltip";

import IconButton from "@src/components/common/button/icon";

export default function Socials() {
  return (
    <div className="flex flex-row items-center justify-center gap-8 text-2xl">
      <IconButton
        as="a"
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        iconProps={{ icon: faGithub }}
        data-tooltip-id="github-tooltip"
        data-tooltip-content="GitHub"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="github-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
      <IconButton
        as="a"
        href="https://leetcode.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        iconProps={{ icon: faLeetcode }}
        data-tooltip-id="leetcode-tooltip"
        data-tooltip-content="LeetCode"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="leetcode-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
      <IconButton
        as="a"
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        iconProps={{ icon: faLinkedin }}
        data-tooltip-id="linkedin-tooltip"
        data-tooltip-content="LinkedIn"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="linkedin-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
      <IconButton
        as="a"
        href="https://dev.to/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        iconProps={{ icon: faDev }}
        data-tooltip-id="devto-tooltip"
        data-tooltip-content="Dev.to"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="devto-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
      <IconButton
        as="a"
        href="discord://discordapp.com/users/your-discord-id"
        iconProps={{ icon: faDiscord }}
        data-tooltip-id="discord-tooltip"
        data-tooltip-content="Discord"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="discord-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
      <IconButton
        as="a"
        href="mailto:your-email@example.com"
        iconProps={{ icon: faEnvelope }}
        data-tooltip-id="email-tooltip"
        data-tooltip-content="Email"
        data-tooltip-place="bottom"
      />
      <Tooltip
        id="email-tooltip"
        style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
      />
    </div>
  );
}
