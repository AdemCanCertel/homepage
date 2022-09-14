import * as React from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useDeepMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";

export default function CommandBar(props) {
  const router = useRouter();

  const actions = [
    {
      id: "activites",
      name: "Activites",
      shortcut: ["a"],
      keywords: "go-activites",
      section: "Pages",
      perform: () => router.push("/activites"),
    },
    {
      id: "books",
      name: "Books",
      shortcut: ["b"],
      keywords: "go-books",
      section: "Pages",
      perform: () => router.push("/books"),
    },
    {
      id: "photos",
      name: "Photos",
      shortcut: ["p"],
      keywords: "go-photos",
      section: "Pages",
      perform: () => router.push("/photos"),
    },
    {
      id: "repository",
      name: "Repository",
      shortcut: ["r"],
      keywords: "go-repository",
      section: "Pages",
      perform: () => router.push("/"),
    },
    {
      id: "snippest",
      name: "Snippest",
      shortcut: ["s"],
      keywords: "go-snippest",
      section: "Pages",
      perform: () => router.push("/"),
    },
    {
      id: "social",
      name: "Social",
      shortcut: ["s"],
      keywords: "go-social",
      section: "Pages",
      perform: () => router.push("/social"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch
              style={searchStyle}
              placeholder="Search"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useDeepMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <div ref={ref} style={getResultStyle(active)}>
      <div style={actionStyle}>
        {action.icon && action.icon}
        <div style={actionRowStyle}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden style={shortcutStyle}>
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut} style={kbdStyle}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
});

const positionerStyle = {
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 16px 16px",
  background: "rgba(0, 0, 0, .8)",
  boxSizing: "border-box",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  color: "#a1a1a1",
  borderRadius: "8px",
  overflow: "hidden",
};

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  margin: 0,
  background: "#171717",
  color: "#a1a1a1",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  background: "#171717",
};

const kbdStyle = {
  padding: "4px 8px",
  textTransform: "uppercase",
  color: "#a1a1a1",
  background: "#171717",
};

const shortcutStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
};

const actionStyle = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
};

const actionRowStyle = {
  display: "flex",
  flexDirection: "column",
};

const getResultStyle = (active) => {
  return {
    padding: "12px 16px",
    background: "#171717",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    cursor: "pointer",
    color: "#a1a1a1"
  };
};