import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

function Tabs({ children, actionsHandler }) {
  let { handler = () => {}, config: tabConfig } = actionsHandler();
  tabConfig = { hiddenTabs: [], defaultActiveTab: "", ...tabConfig };
  const [extraChildren, tabsChildren] = children.reduce(
    (acc, curr) => {
      if (tabConfig.hiddenTabs.includes(curr.props.title)) return acc;
      let ind = curr.props.isExtra ? 0 : 1;
      acc[ind].push(curr);
      return acc;
    },
    [[], []]
  );
  const findTab = title => tabsChildren.find(c => c.props.title === title);
  const [activeTab, updateTab] = useState(findTab(tabConfig.defaultActiveTab));

  handler({
    switchTab: name => updateTab(findTab(name))
  });

  useEffect(() => {
    if (!activeTab) return;
    updateTab(findTab(activeTab.props.title));
  }, [activeTab, tabsChildren]);

  const tabClassNames =
    "mx-4 py-3 px-1 text-gray-600 flex items-center border-b-2 border-transparent cursor-pointer";
  const activeTabClassNames = tabClassNames + " border-gray-700 text-gray-800";

  return (
    <>
      <div className="flex justify-between items-center bg-white border-b border-gray-400">
        <ul className="flex">
          {tabsChildren.map(tab => {
            const classNames =
              activeTab && activeTab.props.title === tab.props.title
                ? activeTabClassNames
                : tabClassNames;
            return (
              <li
                className={classNames}
                onClick={() => {
                  updateTab(tab);
                }}
              >
                <i className={`icon-${tab.props.icon} mr-1 text-lg`}></i>{" "}
                {tab.props.title}
              </li>
            );
          })}
        </ul>
        <>{extraChildren}</>
      </div>
      <div className="tab-content">{activeTab}</div>
    </>
  );
}

Tabs.defaultProps = {
  hiddenTabs: [],
  icon: ""
};

Tabs.Tab = ({ children }) => {
  return <>{children}</>;
};

Tabs.Tab.defaultProps = {
  title: "default title",
  icon: ""
};

Tabs.Extra = ({ children }) => {
  return <section>{children}</section>;
};

Tabs.Extra.defaultProps = {
  isExtra: true
};

export default Tabs;
