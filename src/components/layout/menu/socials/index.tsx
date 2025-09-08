import React from "react";

import { Tooltip } from "react-tooltip";

import IconButton from "@src/components/common/button/icon";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

type SocialLink = {
  id: string;
  href: string;
  icon: FontAwesomeIconProps["icon"];
  content: string;
};

type SocialsProps = {
  links: SocialLink[];
};

export default function Socials({ links }: SocialsProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-8 text-2xl">
      {links.map(({ id, href, icon, content }) => (
        <React.Fragment key={id}>
          <IconButton
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            iconProps={{ icon }}
            data-tooltip-id={`${id}-tooltip`}
            data-tooltip-content={content}
            data-tooltip-place="bottom"
          />
          <Tooltip
            id={`${id}-tooltip`}
            style={{ fontSize: "14px", fontFamily: "var(--font-mona-sans)" }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
